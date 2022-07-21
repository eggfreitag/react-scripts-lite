const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const cssRules = require("./webpack/cssRules");

module.exports = (node_env, port) => {
  const isDevEnv = node_env === "development";
  const isProdEnv = node_env === "production";

  return {
    mode: isDevEnv ? "development" : isProdEnv && "production",
    devtool: isDevEnv ? "eval" : isProdEnv && "source-map",
    resolve: {
      extensions: [".js", ".jsx", ".json", ".css"],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-react"],
            },
          },
        },
        ...cssRules(node_env),
        {
          test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/],
          type: "asset",
        },
      ],
    },
    devServer: {
      port: port || 3000,
      static: {
        directory: "public",
      },
      devMiddleware: {
        publicPath: "/",
      },
      historyApiFallback: true,
      allowedHosts: ["all"],
      open: true,
      hot: true,
    },
    stats: "minimal",
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve("public/index.html"),
        favicon: path.resolve("public/favicon.ico"),
      }),
      new MiniCssExtractPlugin({
        filename: path.join("static/css", "[name].css"),
      }),
    ],
  };
};
