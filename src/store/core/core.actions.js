export const APP_INITIALIZED = "APP_INITIALIZED";
export const CALL_IN_PROCESS = "CALL_IN_PROCESS";
export const CALL_IN_PROCESS1 = "CALL_IN_PROCESS1";
export const CALL_IN_PROCESS2 = "CALL_IN_PROCESS2";
export const GET_LANGUAGE = "GET_LANGUAGE";
export const LANGUAGE_SUCCESS = "LANGUAGE_SUCCESS";
export const LANGUAGE_FAIL = "LANGUAGE_FAIL";
export const RESET_REDUCERS = "RESET_REDUCERS";

export const appInitialized = ({ initialized }) => {
  return {
    type: APP_INITIALIZED,
    payload: {
      initialized,
    },
  };
};

export const callInProcess = (toggle) => ({
  type: CALL_IN_PROCESS,
  payload: toggle,
});

export const callInProcess1 = (toggle) => ({
  type: CALL_IN_PROCESS1,
  payload: toggle,
});

export const callInProcess2 = (toggle) => ({
  type: CALL_IN_PROCESS2,
  payload: toggle,
});

export const getLanguages = () => {
  return {
    type: GET_LANGUAGE,
  };
};

export const languageSuccess = (languages) => {
  return {
    type: LANGUAGE_SUCCESS,
    payload: languages,
  };
};

export const languageFail = () => {
  return {
    type: LANGUAGE_FAIL,
  };
};

export const resetReducers = () => ({
  type: RESET_REDUCERS,
});
