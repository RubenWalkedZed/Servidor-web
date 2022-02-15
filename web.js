const express = require("express");
const { dirname } = require("path");
const app = express ();

const path = require("path")


app.get("/", (req, res) =>{
//res.send("Hola Mundo");
res.sendFile(path.join(__dirname +"/index.html"));
}); 

app.listen (3000, ()=> {
    console.log ("Tu server esta corriendo", 3000);
});

