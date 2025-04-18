require("./connect")
const products = require("./products2")
const express = require("express")
const app = express()


app.use(express.json())


app.get("/", async (req, res) => {
    let data = await products.find()
    res.send(data)
    console.log(data)
})


app.post("/create", async (req, res) => {
    let data = new products(req.body)
    let response = await data.save()
    res.send(response)
    console.log(response)
})




let server = app.listen(0, () => {
    let port = server.address().port
    console.log(`server started ${port}`)
})