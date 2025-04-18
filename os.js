const os = require("node:os")
const path=require("path")



console.log("hello")
console.log("bye")
console.log("john")
console.log(os.freemem())
console.log(os.homedir())
console.log(os.arch())
console.log(os.availableParallelism())
console.log(os.hostname())

console.log(path.basename('/foo/bar/baz/asdf/quux.html'))
let a = path.join(__dirname, "folder")

