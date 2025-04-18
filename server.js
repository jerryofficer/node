
//requrie 1
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const bodyParser = require("body-parser")


// connection 2


mongoose.connect("mongodb://127.0.0.1:27017/form")
    .then(() => {
    console.log("Connected to the database")
    })
    .catch(() => {
    console.log("we can not connect to the database")
    })

//Schema 3
    
const userSchema = new mongoose.Schema({
    name: String,
    pet: String,
    age:Number
})
const userModel = mongoose.model("user", userSchema, "user")



//middleware 4

app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }))

//route 5

app.post("/submit", async (req, res) => {
    const data = new userModel({
        name: req.body.name,
        pet: req.body.pet,
        age:req.body.age
    })
    try {
        let newdata = await data.save()
        res.send(`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Webpage</title>
  <style>
  table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
   table {
            margin: 20px auto;
            width: 80%;
            text-align: center;
        }
        th, td {
            padding: 10px;
        }
        th {
            background-color: #f2f2f2;
        }   
  </style>
</head>

<body>
<table>
  <tr>
    <th>Name</th>
    <th>pet</th>
    <th>age</th>
  </tr>
  <tr>
    <td>${newdata.name}</td>
    <td>${newdata.pet}</td>
    <td>${newdata.age}</td>
  </tr>
</table>
</body>

</html>
`)
        console.log(newdata)
    } catch {
        (err) => {
            console.log(err,"not saved")
        }
        
    }
})

let server = app.listen(0, () => {
    let port = server.address().port
    console.log(`server started ${port}`)
})