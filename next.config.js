const isProd = process.env.NODE_ENV === "production";

module.exports = {
  target: "serverless",
  devIndicators: {
    autoPrerender: false,
  },
  env: {
    GRAPHQL_URL: isProd
      ? "https://gicungco-store.herokuapp.com/v1/graphql"
      : "http://localhost:8080/v1/graphql",
    GRAPHQL_WS: isProd
      ? "ws://gicungco-store.herokuapp.com/v1/graphql"
      : "ws://localhost:8080/v1/graphql",
    GRAPHQL_ADMIN_KEY:
      "7e1e199f4d0593c6fd4e9ed2cdd62b6b7bc0932857f281a03d712d74d8a5a126",
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    // Important: return the modified config
    config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));
    return config;
  },
};
