import { createProxyMiddleware } from "http-proxy-middleware";

const proxyConfig = (app) => {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://api-dev.wogom.com",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
    })
  );
};

export default proxyConfig;
