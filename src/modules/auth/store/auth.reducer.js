import {
  LOGIN_SUCCESS,
  SIGNUP_SUCCESS,
  GET_USER_SUCCESS,
  UPDATE_USER_SUCCESS,
  FAKE_LOGIN,
} from "./auth.actions";
import { RESET_REDUCERS } from "../../../store/core/core.actions";

const INITIAL_STATE = {
  isLoggedIn: false,
  user: {},
  token: null,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        token: action.payload.token,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        deviceId: action.payload.device_id,
        isLoggedIn: true,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isLoggedIn: !!action.payload.user,
      };

    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        user: { ...state.user, ...action.payload.user },
      };
    case FAKE_LOGIN:
      return {
        ...state,
        isLoggedIn: !state.isLoggedIn,
      };
    case RESET_REDUCERS:
      return {
        ...INITIAL_STATE,
      };
    default:
      return state;
  }
};

export default authReducer;
