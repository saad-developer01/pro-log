import { combineEpics, select } from "redux-most";
import * as most from "most";
import {
  LOGIN,
  loginSuccess,
  SIGNUP,
  signUpSuccess,
  LOGOUT,
  GET_USER,
  getUserSuccess,
  getUser,
  IDENTIFY_AUTH_USER,
  logOut,
  RESEND_VERIFICATION_CODE,
  VERIFY_CODE,
} from "./auth.actions";
import {
  callInProcess,
  resetReducers,
  callInProcess1,
  callInProcess2,
} from "../../../store/core/core.actions";
import { showToast } from "../../../store/toast/toast.actions";
import { appInitialized } from "../../../store/core/core.actions";
import {
  login,
  signup,
  resendCode,
  verfifyCode,
} from "../../../core/services/auth/auth.service";
import { getUserInfo } from "../../../core/services/user/user.service";
import AuthenticationTokenHelper from "../../../core/helper/AuthenticationTokenHelper";

const storeAuthInAsyncStorage = ({ token, user }) => {
  try {
    console.log(token, user);
    if (token) {
      localStorage.setItem("token", token);
    }
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
    localStorage.setItem("visited", "visited");
  } catch (error) {
    console.log(error);
  }
};

const cleanAuth = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  AuthenticationTokenHelper.authToken = null;
};

const loginEpic = ($actions) =>
  $actions.thru(select(LOGIN)).flatMap((action) => {
    return most
      .fromPromise(login(action.payload))
      .flatMap((response) => {
        const { token } = response;
        AuthenticationTokenHelper.authToken = token;
        // resetStack({
        //   index: 0,
        //   routes: [{ name: "DrawerNavigator" }],
        // });
        storeAuthInAsyncStorage({ token });
        return most.from([
          loginSuccess({
            token,
          }),
          callInProcess(false),
          showToast({
            message: "Login Successfully",
            type: "success",
          }),
        ]);
      })
      .recoverWith((err) => {
        console.log("Login error --->>> ", err);
        return most.of(callInProcess(false));
      });
  });

const getUserEpic = ($actions) =>
  $actions.thru(select(GET_USER)).flatMap((action) => {
    return most
      .fromPromise(getUserInfo())
      .flatMap((responseData) => {
        const actions = [];
        if (responseData) {
          console.log("user token ", action.payload.token);
          const user = responseData;
          actions.push(getUserSuccess({ user, token: action.payload.token }));
          storeAuthInAsyncStorage({ user });
        } else {
          actions.push(logOut());
        }
        actions.push(
          appInitialized({
            initialized: false,
          })
        );
        return most.from(actions);
      })
      .recoverWith((res) => {
        const actions = [
          appInitialized({
            initialized: false,
          }),
          callInProcess(false),
        ];
        const error = res.data();
        if (error.code === 401) {
          cleanAuth();
          actions.push(resetReducers());
        }
        return most.from(actions);
      });
  });

const logOutEpic = ($actions) =>
  $actions.thru(select(LOGOUT)).flatMap(() => {
    // resetStack({
    //   index: 0,
    //   routes: [{ name: "DrawerNavigator" }],
    // });
    cleanAuth();
    return most.of(resetReducers());
  });

const signUpEpic = ($actions) =>
  $actions.thru(select(SIGNUP)).flatMap((action) => {
    return most
      .fromPromise(signup(action.payload))
      .flatMap(() => {
        // const { phoneNumber } = action.payload;
        // navigate("PhoneVerification", { phoneNumber });
        return most.from([callInProcess(false)]);
      })
      .recoverWith(() => {
        return most.of(callInProcess(false));
      });
  });

const verifyCodeEpic = ($actions) =>
  $actions.thru(select(VERIFY_CODE)).flatMap((action) => {
    return most
      .fromPromise(verfifyCode(action.payload))
      .flatMap((response) => {
        const { token } = response;
        AuthenticationTokenHelper.authToken = token;
        // resetStack({
        //   index: 0,
        //   routes: [{ name: "DrawerNavigator" }],
        // });
        localStorage.setItem("visited", "visited");
        storeAuthInAsyncStorage({ token });
        return most.from([
          signUpSuccess({ token }),
          callInProcess1(false),
          showToast({
            message: "Signup Successfully",
            type: "success",
            duration: 7000,
          }),
        ]);
      })
      .recoverWith(() => {
        return most.of(callInProcess1(false));
      });
  });

const resendVerificationCodeEpic = ($actions) =>
  $actions.thru(select(RESEND_VERIFICATION_CODE)).flatMap((action) => {
    return most
      .fromPromise(resendCode(action.payload))
      .flatMap(() => {
        return most.from([
          callInProcess2(false),
          showToast({
            message: "Code has been sent",
            type: "success",
          }),
        ]);
      })
      .recoverWith(() => {
        return most.of(callInProcess2(false));
      });
  });

const identifyAuthUserEpic = ($actions, $store) => {
  return $actions
    .thru(select(IDENTIFY_AUTH_USER))
    .flatMap((action) => {
      const { auth } = $store.getState();
      if (auth?.user?.id) {
        return most.of(
          appInitialized({
            initialized: false,
          })
        );
      }
      return most
        .fromPromise(localStorage.getItem("token"))
        .flatMap((token) => {
          const authToken =
            token ||
            action.payload.token ||
            AuthenticationTokenHelper.authToken ||
            null;
          if (authToken) {
            AuthenticationTokenHelper.authToken = token;
            return most.of(getUser({ token }));
          }
          return most.of(
            appInitialized({
              initialized: false,
            })
          );
        });
    })
    .recoverWith((error) => {
      const actions = [
        appInitialized({
          initialized: false,
        }),
        callInProcess(false),
      ];
      if (error.responseStatus === 401) {
        actions.push(logOut());
      }
      return most.from(actions);
    });
};

export default combineEpics([
  loginEpic,
  signUpEpic,
  logOutEpic,
  getUserEpic,
  identifyAuthUserEpic,
  verifyCodeEpic,
  resendVerificationCodeEpic,
]);
