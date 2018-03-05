//entry -> output
const path = require('path');

const distPath = path.join(__dirname,'DIST', 'public');

module.exports = {
    // // entry: './playground/redux-101.js',
    entry: './public/scripts/app.js',
    // entry: './playground/ES6-Array_destructuring.js',
    // entry: './playground/hoc.js',
    // entry: './playground/redux-expensify.js',
    output: {
        path: path.join(distPath),
        filename: 'bundle.js'
    },
    module:{
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/,
            options: {
                presets: ["env", "react"],
                plugins: ["transform-class-properties"]
            }
        },{
            test:/\.s?css$/,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader"
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(distPath),
        historyApiFallback: true
    }
    // module: {
    //     loaders: [
    //         {
    //             loader: "babel-loader",
    //             // Skip any files outside of your project's `src` directory
    //             exclude: /node_modules/,
    //
    //             // Only run `.js` and `.jsx` files through Babel
    //             test: /\.js$/,
    //
    //             // Options to configure babel with
    //             query: {
    //                 plugins: ['transform-runtime'],
    //                 presets: ['env', 'react'],
    //             }
    //         },
    //     ]
    // }
};



//loader

