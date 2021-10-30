export const ServerResponseMiddleware = () => {
  return () => ({
    response(next) {
      return next().then((res) => {
        return res.data().data;
      });
    },
  });
};
