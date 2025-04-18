require("./con1")
const pro= require("./pro")

const express = require("express")
const app = express()

app.use(express.json())


app.get("/", async (req, res) => {
    let data = await pro.find()
    res.send(data)
    console.log(data)
})

app.post("/create", async (req, res) => {
    let data = new  pro(req.body)
    let result = await data.save()
    res.send(result)
    console.log(result)
})

app.put("/upload/:id", async (req, res) => {
    let data = await pro.updateOne({ _id: req.params.id }, { $set: req.body })
    res.send(data)
    console.log(data)
})

app.delete("/delete/:id", async (req, res) => {
    let data = await pro.deleteOne({ _id: req.params.id }) 
    res.send(data)
    console.log(data)
})



let server = app.listen(0, () => {
    let port = server.address().port
    console.log(`server started ${port}`)
})