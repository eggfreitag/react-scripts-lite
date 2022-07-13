const path = require("path");
const dotenv = require("dotenv-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (node_env) => {
  const isDevEnv = node_env === "development";
  const isProdEnv = node_env === "production";

  return {
    target: "web",
    mode: isDevEnv ? "development" : isProdEnv && "production",
    entry: {
      index: path.resolve(__dirname, "../../../src/index.jsx"),
    },
    output: {
      path: path.resolve(__dirname, "../../../build"),
      filename: "static/js/[name].js",
      assetModuleFilename: "static/media/[name][ext]",
    },
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
        {
          test: /\.css$/i,
          exclude: /\.module\.css$/,
          use: [
            isDevEnv ? "style-loader" : MiniCssExtractPlugin.loader,
            { loader: "css-loader", options: { importLoaders: 1 } },
            "postcss-loader",
          ],
        },
        {
          test: /\.module\.css$/,
          use: [
            isDevEnv ? "style-loader" : MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: { modules: true, importLoaders: 1 },
            },
            "postcss-loader",
          ],
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            isDevEnv ? "style-loader" : MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                importLoaders: 2,
              },
            },
            "resolve-url-loader",
            {
              loader: "sass-loader",
              options: {
                sourceMap: true,
              },
            },
          ],
        },
        {
          test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.ico$/, /\.svg$/],
          type: "asset",
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "../../../public/index.html"),
      }),
      new MiniCssExtractPlugin({
        filename: "static/css/[name].css",
      }),
      new dotenv({}),
    ],
  };
};
