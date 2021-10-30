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
  middleware: [ServerErrors, AccesTokenMiddleware, ServerResponse, EncodeJson],
  resources: {
    User: {
      updateUser: {
        path: "/user",
        method: "put",
      },
      getUserInfo: {
        path: "/users/me",
        method: "get",
      },
    },
  },
});

export const updateUser = (userParams) => {
  return client.User.updateUser(userParams);
};

export const getUserInfo = () => {
  return client.User.getUserInfo();
};
