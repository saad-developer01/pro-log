export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const SIGNUP = "SIGNUP";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER = "GET_USER";
export const RESTORE_USER_DATA = "RESTORE_USER_DATA";
export const UPDATE_USER = "UPDATE_USER";
export const IDENTIFY_AUTH_USER = "IDENTIFY_AUTH_USER";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAILURE = "UPDATE_USER_FAILURE";
export const LOGOUT = "LOGOUT";
export const RESEND_VERIFICATION_CODE = "RESEND_VERIFICATION_CODE";
export const VERIFY_CODE = "VERIFY_CODE";
export const FAKE_LOGIN = "FAKE_LOGIN";

export const fakeLogin = () => ({
  type: FAKE_LOGIN,
});

export const resendVerificationCode = ({ phoneNumber, type }) => ({
  type: RESEND_VERIFICATION_CODE,
  payload: { phoneNumber, type },
});

export const verifyCode = ({ phoneNumber, code, type }) => ({
  type: VERIFY_CODE,
  payload: { phoneNumber, code, type },
});

export const login = (credential) => ({
  type: LOGIN,
  payload: credential,
});

export const loginSuccess = ({ token }) => ({
  type: LOGIN_SUCCESS,
  payload: {
    token,
  },
});

export const loginFailure = ({ error }) => ({
  type: LOGIN_FAILURE,
  payload: {
    error,
  },
});

export const updateUser = (user) => ({
  type: UPDATE_USER,
  payload: {
    user,
  },
});

export const updateUserSuccess = ({ user }) => ({
  type: UPDATE_USER_SUCCESS,
  payload: {
    user,
  },
});

export const updateUserFailure = ({ error }) => ({
  type: UPDATE_USER_FAILURE,
  payload: {
    error,
  },
});

export const signUp = (userData) => ({
  type: SIGNUP,
  payload: userData,
});

export const signUpSuccess = ({ user, userCredentials, signupMethod }) => ({
  type: SIGNUP_SUCCESS,
  payload: {
    user,
    userCredentials,
    signupMethod,
  },
});

export const signUpFailure = ({ error }) => ({
  type: SIGNUP_FAILURE,
  payload: {
    error,
  },
});

export const getUser = ({ token }) => ({
  type: GET_USER,
  payload: { token },
});

export const getUserSuccess = ({ user, token }) => ({
  type: GET_USER_SUCCESS,
  payload: {
    user,
    token,
  },
});

export const logOut = () => ({
  type: LOGOUT,
});

export const identifyAuthUser = ({ token }) => ({
  type: IDENTIFY_AUTH_USER,
  payload: { token },
});
