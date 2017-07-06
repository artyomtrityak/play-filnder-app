const webpack = require("webpack");
const path = require("path");
const isProduction = process.env.NODE_ENV === "production";

const plugins = [
  new webpack.DefinePlugin({
    "process.env": { NODE_ENV: JSON.stringify(isProduction ? "production" : "development") }
  })
];

if (isProduction) {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      minimize: true,
      sourceMap: false,
      warnings: false,
      //mangle: false
    })
  );
}

const webpackConfig = {
  entry: {
    app: ["./javascript/index.js"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        enforce: "pre",
        loader: "eslint-loader",
        options: {
          failOnWarning: false,
          failOnError: true
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "sass-loader"
        }]
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
          {
            loader: 'image-webpack-loader',
            query: {
              mozjpeg: {
                progressive: true,
              },
              gifsicle: {
                interlaced: false,
              },
              optipng: {
                optimizationLevel: 4,
              },
              pngquant: {
                quality: '75-90',
                speed: 3,
              },
            }
          }
        ]
      },
      {
        test: /\.svg$/i,
        loader: 'inline-loader'
      }
    ]
  },

  // Build result
  output: {
    path: path.join(__dirname, "/build/"),
    filename: "bundle.js",
    publicPath: "http://localhost:8090/build/"
  },

  stats: !isProduction,

  devServer: {
    port: 8090
    // Uncomment to allow CORS
    // headers: { "Access-Control-Allow-Origin": "*" }
  },

  plugins: plugins,

  resolve: {
    modules: [path.join(__dirname, "node_modules")],
    extensions: [".js", ".scss"]
  },
  devtool: isProduction ? false : "eval-cheap-module-source-map"
  // devtool: 'eval'
};

module.exports = webpackConfig;
