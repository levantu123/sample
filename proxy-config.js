const PROXY_CONFIG = {
    "/auth": {
        "target": "https://id.acb.com.vn/auth",
        "secure": false,
        "changeOrigin": true,
        "pathRewrite": {
            "^/auth": ""
        }
    },
    "/getPermission": {
        "target": "http://localhost:8080/getPermission",
        "secure": false,
        "pathRewrite": {
            "^/getPermission": ""
        }
    },
    "/goals": {
        "target": "http://localhost:18080/goals",
        "secure": false,
        "pathRewrite": {
            "^/goals": ""
        }
    },
    "/invests": {
        "target": "http://localhost:18080/invests",
        "secure": false,
        "pathRewrite": {
            "^/invests": ""
        }
    },
    "/v1": {
        "target": "https://api.dev.acb.com.vn/v1",
        "secure": false,
        "changeOrigin": true,
        "pathRewrite": {
            "^/v1": ""
        }
    }
}

module.exports = PROXY_CONFIG;
