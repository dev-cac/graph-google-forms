const path = require('path');

module.exports = {
    entry: "./src/graficar/data.js",
    output: {
        path: path.join(__dirname, "build"),
        filename: "bundle.js"
    }
}
