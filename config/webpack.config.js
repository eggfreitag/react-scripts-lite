const path = require("path");
const dotenv = require("dotenv-webpack");
const cssRules = require("./webpack/cssRules");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = (node_env) => {
  const isDevEnv = node_env === "development";
  const isProdEnv = node_env === "production";

  return {
    target: "web",
    mode: isDevEnv ? "development" : isProdEnv && "production",
    entry: {
      index: path.resolve(__dirname, "../../../src/index"),
    },
    output: {
      path: path.resolve(__dirname, "../../../build"),
      filename: path.join("static/js", "[name].[contenthash].js"),
      assetModuleFilename: path.join(
        "static/media",
        "[name][contenthash][ext]"
      ),
    },
    devtool: isDevEnv ? "eval" : isProdEnv && "source-map",
    resolve: {
      extensions: [".js", ".jsx", ".json", ".css"],
    },
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          test: /\.js(\?.*)?$/i,
          parallel: true,
        }),
        new CssMinimizerPlugin(),
      ],
      splitChunks: {
        cacheGroups: {
          vendor: {
            chunks: "initial",
            name: "vendor",
            enforce: true,
          },
        },
      },
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-react", "@babel/preset-env"],
            },
          },
        },
        ...cssRules(node_env),
        {
          test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.ico$/, /\.svg$/],
          type: "asset",
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "../../../public/index.html"),
        favicon: path.resolve(__dirname, "../../../public/favicon.ico"),
      }),
      new MiniCssExtractPlugin({
        filename: path.join("static/css", "[name].[contenthash].css"),
      }),
      new dotenv(),
    ],
  };
};
