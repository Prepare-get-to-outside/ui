const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    //src/index.tsx 파일을 진입점으로 설정 
    entry: path.resolve(__dirname, 'src/index.tsx'), 
    //path.resolve 왼쪽부터 읽기 시작해서 절대경로를 만나기 전까지 반환한다. 
    output: { //번들링 된 결과물을 어디에 둘 것인지에 대한 설정 
        path: path.resolve(__dirname, "dist/"),
        filename: 'bundle.js'
    },
    resolve: { //웹팩이 해석할 확장자를 지정
        extensions: ["*", ".js", ".jsx", ".tsx"],
        // alias: {
            //상대경로로 참조하지 않고, 절대경로로 더 간편하게 참조하도록 하기 위함 
            // '@drzz-front': path.resolve(__dirname, 'src')
        // }
        
    },
    module: {
        rules: [
            //1. ES6, JSX 구문 변환에 대한 것 
            {
                test: /\.js$|jsx/,
                exclude: /(node_modules|brower_components)/,
                loader: "babel-loader",
                options: { presets: ["@babel/env"] }
            },
            //2. CSS 처리 css-loader 작동을 위해 style-loader 필요
            {
                test: /\\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                // .ts .tsx 파일들을 ts-loader 를 이용해 컴파일 하여 번들링 
                test: /\.(ts|tsx)$/,
                exclude:/(node_modules|bower_components)/,
                loader: "babel-loader",
                resolve: {
                    extensions: ['.ts', '.tsx', '.js', '.json'],
                },
                use: 'ts-loader',
                options: { 
                    // presets: ["@babel/env"],
                    presets: ["@babel/env", "@babel/preset-react", "@babel/preset-typescript"]
                  }
            },
            // {
            //     test: /\.s[ac]ss$/i,
            //     use: [
            //         'style-loader',
            //         'css-loader',
            //         'sass-loader'
            //     ]
            // }
        ]
    },
    devServer: { //webpack-dev-server 옵션 설정 
        // historyApiFallbak: true //SPA를 위한 설정 
        static: {
            directory: path.join(__dirname, 'public/'),
        },
        compress: true,
        port: 3000,
        // hotOnly: true, //devserver 에서만 핫로딩 가능하게 
    },
    plugins: [
        //index.html 에 번들링된 스크립트 파일과 스타일이 자동으로 연결 
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
        // new CleanWebpackPlugin(),
    ]
}