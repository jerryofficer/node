const express = require("express")
const app = express()


app.get("/", (req, res) => {
    res.send("this is my home page")
})

app.get("/about", (req, res) => {
    res.send("this is my about page")
})

app.listen(9000, () => {
    console.log("server started")
})



// task of express



// app.get("/", (req, res) => {
//     res.send("this is my home page")
//     res.send(<button>About</button>)
// })