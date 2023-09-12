const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const GoogleFontsPlugin = require("google-fonts-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  devtool: "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      title: "Restaurant Page",
    }),
    new GoogleFontsPlugin({
      fonts: [
        {
          family: "Lato",
          variants: ["300", "300italic", "400", "400italic", "700"],
        },
      ],
    }),
  ],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
