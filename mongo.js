const { MongoClient } = require("mongodb")
const url = "mongodb://127.0.0.1:27017/e-com"


let client = new MongoClient(url)

async function getdata() {
    let result = await client.connect()
    let db = result.db("e-com")
    return db.collection("Products")

    // let data = await collection.find({}).toArray()
    // console.log(data)

    
}
// getdata()

module.exports = getdata;