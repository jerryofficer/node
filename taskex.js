const express = require("express");
const app = express();


// the express routing task


app.get("/", (req, res) => {
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<center>
<h1>This is a home page</h1>
 <a href="/about"><button>About</button></a>
 </center>
</body>
</html>
    `);
});
app.get("/about", (req, res) => {
    let ab=req.query.name
    res.send(`<!DOCTYPE html>
        <html lang="en>
        <head>
        <meta charset="UTF-8"
        <meta name="viewport content="wedth=device-width,intial-scale=1.0">
        <title>Document</title>
        <center>
       <h1>This is a about page</h1>
       <input type="text" value="${ab}"></input>
      <a href="/login"><button>Login</button></a>
      </center>
       </head>
       <body>
       </html> `);
}); 

app.get("/login", (req, res) => {
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<center>
<h1>The Json Data</h1>
<ul id=jsondata><ul>
</center>
   <script>
     fetch("https://jsonplaceholder.typicode.com/posts")
     .then(response=>response.json())
     .then(data=>{
       const jsdata= document.getElementById("jsondata")
       jsdata.textContent=JSON.stringify(data)
})
   </script>
</body>
</html> `)
})

const Server = app.listen(0, () => {
    let port = Server.address().port
    
    console.log(`server started at ${port}`);
});
