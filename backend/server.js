const express = require("express");
const app = express();
var router = require("./router");
const http = require("http");
// var cors = require("cors");

// app.get("/", (req,res) => res.send("Hello World"))
router(app);
const port = 3000;
const server = http.createServer(app);
server.listen(port,()=>{ console.log(`Application listening to port ${port}`)})
// app.listen(3000);
// console.log("Server 3000 is listening")

