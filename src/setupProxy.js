const {createProxyMiddleware  } = require('http-proxy-middleware');
// 代理解决跨域问题
module.exports = function (app) {
    app.use(createProxyMiddleware('/api', {
        target: 'http://59.36.173.92:8088/',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
            "^/api": ""
        }
    }))
}
