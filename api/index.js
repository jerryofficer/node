const connect = require("./connect")
const products = require("./products2")

const create = async () => {
    let data = new products({
        name: "Renu",
        price:22,
    })
    await data.save()
}
create()


// read

// const read = async () => {
//     let data = await products.find()
//     console.log(data)
// }