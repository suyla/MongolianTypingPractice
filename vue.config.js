module.exports = {
    devServer: {
        hot: true, //自动保存
        open: true, //自动启动
        port: 8080, //默认端口号
        host: "0.0.0.0"
    },
    css: {
        loaderOptions: {
            less: {
                lessOptions: {
                    modifyVars: {
                        'primary-color': '#212121',
                        'border-radius-base': '2px',

                    },
                    javascriptEnabled: true,
                },
            },
        },
    },
    configureWebpack:{
        module: {
            rules: [
                {
                    test: /\.mjs$/,
                    include: /node_modules/,
                    type: "javascript/auto"
                },
            ]
        }
    }
};
