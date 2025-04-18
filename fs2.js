const ab = require("./file1.js")
const http = require("http")

http.createServer((req, res) => {
    res.writeHead(200, { "content-Type": "application/json" })
    res.write(JSON.stringify(ab))
    res.end()

}).listen(5000)