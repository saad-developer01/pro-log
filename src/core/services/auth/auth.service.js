import forge from "mappersmith";
import { apiBaseUrl } from "../../../constants/api-baseUrl";
import { ServerErrorMiddleware } from "../../middleware/server-error-middleware";
import { AccessTokenMiddleware } from "../../middleware/access-token-middleware";
import EncodeJson from "mappersmith/middleware/encode-json";
import { ServerResponseMiddleware } from "../../middleware/server-response-middleware";

const ServerErrors = ServerErrorMiddleware();
const ServerResponse = ServerResponseMiddleware();
const AccesTokenMiddleware = AccessTokenMiddleware();
const client = forge({
  host: apiBaseUrl,
  middleware: [ServerErrors, ServerResponse, AccesTokenMiddleware, EncodeJson],
  resources: {
    Auth: {
      login: {
        path: "/auth/login",
        method: "post",
        bodyAttr: "loginParams",
      },
      register: {
        path: "/auth/register",
        method: "post",
        bodyAttr: "registerParams",
      },
      resendCode: {
        path: "/buyer/check-phone-verification",
        method: "post",
        bodyAttr: "resendParams",
      },
      verfifyCode: {
        path: "/buyer/check-phone-verification",
        method: "post",
        bodyAttr: "verfifyParams",
      },
      logout: {
        path: "/logout",
        method: "get",
      },
    },
  },
});

export const login = (loginParams) => {
  return client.Auth.login({ loginParams });
};

export const signup = (registerParams) => {
  return client.Auth.register({ registerParams });
};

export const resendCode = (resendParams) => {
  return client.Auth.resendCode({ resendParams });
};

export const verfifyCode = (verfifyParams) => {
  return client.Auth.verfifyCode({ verfifyParams });
};

export const logout = () => {
  return client.Auth.logout();
};
