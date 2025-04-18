const fs = require("fs")

// crud
// create read update delete

fs.readFile("file1.txt","utf-8",(err,data)=>{
console.log(err,data)
})

fs.writeFile("file2.txt","welcome to nodejs",()=>{
    console.log("written to the file")
})

fs.open("abc.txt","a",function(err,file){
if(err) throw err;
console.log("file created")
})

fs.open("abc.txt","a",()=>{
    console.log("file created")
})

fs.rename("new.html","home.html",()=>{
    console.log("file renamed")
})
fs.unlink("home.html",()=>{
    console.log("file deleted")
})

fs.unlink("home.html",function(err){
if(err) throw err;
console.log("file deleted")
})