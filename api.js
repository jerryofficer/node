const express = require("express")
const app = express()
const dbconnection = require("./mongo")
const mongodb=require("mongodb")

app.use(express.json())

app.get("/", async (req, res) => {
    let data = await dbconnection()
    let result = await data.find().toArray()
    res.send(result)
})

app.post("/create", async (req, res) => {
    let data = await dbconnection();
    let result = await data.insertOne(req.body)
    res.send(result)
    console.log(result)
    
})


app.put("/upload/:id", async (req, res) => {
    let data = await dbconnection();
    let result = await data.updateOne({ _id: new mongodb.ObjectId(req.params.id) }, { $unset: req.body })
    res.send({result: "Success"})
    console.log(result)
})



const server = app.listen(0, () => {
    const port=server.address().port
    console.log(`${port} server started`)
    
})