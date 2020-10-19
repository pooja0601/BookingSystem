const express = require("express");
const app = express();
var router = require("./router");
const http = require("http");
var cors = require("cors");
const path = require("path");


app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

router(app);

const port = 3000;
const server = http.createServer(app);
server.listen(port, () => {console.log(`Application listening to port ${port}`); }
);
