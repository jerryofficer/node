const http = require("http")

http.createServer((req, res) => {
    res.write("hello my name is Divya")
    res.end()

}).listen(8000)