const path = require("path"); //nodejs core module

module.exports = {
  entry: {
    app: ["@babel/polyfill", "./src/app.js"], //source file
  },
  output: {
    path: path.resolve(__dirname, "build"), // where to send build bundle
    filename: "app.bundle.js",
  },
  module: {
    //define loaders
    rules: [
      {
        test: /\.js?$/, //regex to look at all JS files
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["@babel/preset-env"],
        },
      },
    ],
  },
};
