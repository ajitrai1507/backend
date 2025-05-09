const express = require("express");
const app = express();



app.use((req, res)=>{
    res.send({"name":"Ajit Rai", "id":1507, "money":70, "email":"ajitrai1507"});
})



const port = 3000;

app.listen(port, ()=>{
    console.log("Server is Started");
})