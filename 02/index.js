const express = require("express");
const app = express();

app.use(express.json());


app.get("/user", (req, res)=>{
    res.send({"name":"Ajit Rai", "email":"ajitrai1507"})
    console.log("The get is  executed succesfully");
})

app.post("/user", (req, res)=>{

    res.send("Succesfully executed");
    console.log(req.body)
})


const port = 3000

app.listen(port, ()=>{
    console.log("The server is listening at port 3000");
})