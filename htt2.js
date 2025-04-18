const http = require("http")
const data = require("./file1")
const fs = require("fs")


// http.createServer((req, res) => {
//     if (req.url === "/") {
//       res.end(JSON.stringify(data))
//     } else if (req.url === "/about") {
//         res.end("this is a about page")

//     } else if (req.url === "/Conatct") {
//         res.write("this is a Conatct page")
//         res.end()
//     } else {
//        res.end("this page not exit")
//     }

// }).listen(8080)


// http.createServer((req, res) => {
//     switch (req.url) {
//         case "/":
//             res.end(JSON.stringify(data))
//             break;
//         case "/about":
//             res.end("this is a about page")
//             break;
//         case"/help":
//             res.write("this is a help page")
//             res.end()
//             break;
//         default:
//             res.end("this page not exit")
//     }
// }).listen(9090)



http.createServer((req, res) => {
    if (req.url === "/") {
      res.end(JSON.stringify(data))
    } else if (req.url === "/about") {
        const filContent = fs.readFileSync('About.html')
        res.writeHead(200, { 'content-type': 'text/html' });
        res.end(filContent)
    } else {
       res.end("this page not exit")
    }

}).listen(8080)






