import forge from "mappersmith";
import { apiBaseUrl } from "../../../constants/api-baseUrl";
import { ServerErrorMiddleware } from "../../middleware/server-error-middleware";
import { ServerResponseMiddleware } from "../../middleware/server-response-middleware";
import { AccessTokenMiddleware } from "../../middleware/access-token-middleware";
import EncodeJson from "mappersmith/middleware/encode-json";

const ServerErrors = ServerErrorMiddleware();
const ServerResponse = ServerResponseMiddleware();
const AccesTokenMiddleware = AccessTokenMiddleware();
const client = forge({
  host: apiBaseUrl,
  middleware: [ServerErrors, ServerResponse, AccesTokenMiddleware, EncodeJson],
  resources: {
    Core: {
      getLanguages: {
        path: "/i18n/languages",
        method: "get",
      },
      getCurrencies: {
        path: "/currency",
        method: "get",
      },
      updateAPI: {
        path: "update-api",
        method: "put",
      },
      postAPI: {
        path: "post-api",
        method: "post",
      },
      getBookings: {
        path: "/bookings",
        method: "get",
      },
      getRecentlyViewed: {
        path: "/recently-viewed",
        method: "get",
      },
    },
  },
});

export const getLanguagesService = () => {
  return client.Core.getLanguages();
};

export const getCurrenciesService = () => {
  return client.Core.getCurrencies();
};

export const getBookingsService = ({ category, productId }) => {
  const params = { category };
  if (productId) {
    params.productId = productId;
  }
  return client.Core.getBookings(params);
};
export const getRecentlyViewedService = () => {
  return client.Core.getRecentlyViewed();
};
