const path = require("path");

module.exports = {
  entry: ["./main/src/scripts", "react-day-picker/lib/style.css"],

  output: {
    filename: "main.js",
    path: path.join(__dirname, "../", "build"),
    publicPath: "/",
  },

  resolve: {
    extensions: [".js", ".jsx", ".scss", ".json", ".css"],
    modules: ["node_modules"],
  },

  module: {
    loaders: [
      {
        test: /\.(jsx|js)?$/,
        loader: "babel-loader",
        exclude: /(node_modules)/,
        include: path.join(__dirname, "src"),
        query: {
          presets: ["es2015", "react"],
        },
      },
      {
        test: /\.css$/,
        loader: ["style-loader", "css-loader"],
      },
    ],
  },
};
