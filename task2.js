
const express = require("express")
const app=express()

const reqfilter = (req, res, next) => {
    const age = req.query.age; 

    if (!age) {
        res.send(`please provide a age`);
    } else if (parseInt(age, 10) <= 18) {
        res.send('You can not acces this page');
    } else {
        next(); 
    }
};

app.use(reqfilter)


app.get("/", (req, res) => {
    let a = req.query.age
    res.send(`this is a home page ${a}`)
})

app.get("/help", (req, res) => {
    let ab=req.query.age
    res.send(`this is help page ${ab}`)
})


const server = app.listen(0, () => {
    const port = server.address().port
    console.log(`server started ${port}`)
      
  })