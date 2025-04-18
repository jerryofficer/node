const express = require("express")
let app = express()


app.get("/",(req, res) => {
    res.send("this is a home page");


});
    // by using the paramater method
app.get("/user:userid", (req, res) => {
    let a=req.params.userid
    res.send(`this is a user name ${a}`)
})

app.get("/serach", (req, res) => {
    let b = req.query.name
    res.send(`this is a user age ${b}`)
})


const sever = app.listen(0, () => {
    let port = sever.address().port
    console.log(`server started at ${port}`)
        
    });
    