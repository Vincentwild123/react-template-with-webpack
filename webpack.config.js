const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const path = require("path");
module.exports = {
  mode: "development",
  entry: __dirname + "/src/index.js", //enter
  output: {
    path: __dirname + "/dist", //res output path
    filename: "bundle.js", // res name
  },
  devtool: "eval-source-map", // how the complier map to sourse
  //four kinds of value
  /*
  1.source-map: Row column mapping
  2.cheap-module-source-map: row mapping
  3.eval-source-map: eval pack with hidden danger
  4.cheap-module-eval-source-map: row mapping with hidden danger
  */
  devServer: {
    contentBase: "/dist",
    port: 8080,
    historyApiFallback: true,
    //Open gzip compression for each static file
    compress: true,
    //Avoid log redundancy
    clientLogLevel: "silent",
    inline: true,
    //HMR
    hot: true,
    //Set the presentation of compilation errors
    overlay: {
      warnings: true,
      errors: true,
    },
  },
  module: {
    noParse: (content) => /jquery|lodash/.test(content),
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: {
          loader: "babel-loader",
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loaders: [
          "style-loader",
          "css-loader?modules&importLoaders=1&sourceMap",
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: "/dist/" + "img/[name].[hash:7].[ext]",
        },
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: "/dist/" + "media/[name].[hash:7].[ext]",
        },
      },
    ],
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        parallel: true,
      }),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.tmpl.html",
    }),
  ],
};
