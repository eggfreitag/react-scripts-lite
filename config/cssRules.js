const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (node_env) => {
  const isDevEnv = node_env === "development";

  return [
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
  ];
};
