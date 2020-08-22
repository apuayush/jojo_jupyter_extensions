const path = require("path");
module.exports = {
    mode: "development",
    entry: [
        path.resolve(path.join(__dirname, "./main.js"))
    ],
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [{
            use: [
                "style-loader",
                "css-loader",
            ]
        }]
    }
}