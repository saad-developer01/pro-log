import { ServerErrorService } from "../services/server-errors/server-errors.service";

export const ServerErrorMiddleware = () => {
  return () => ({
    response(next) {
      return next().catch((res) => {
        console.log("Error ", res);
        const response = res.data();
        if (response.code !== 200) {
          ServerErrorService(response);
        }
        return next();
      });
    },
  });
};
