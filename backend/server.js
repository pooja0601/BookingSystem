const express = require("express");
const app = express();
var router = require("./router");
const http = require("http");
var cors = require("cors");
const path = require("path");

app.get('/api', (req,res) => {
    const data = {
        user: "Giridhar",
        age: 25
    }
    console.log("inside controller js")
    res.json(data);
})

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

const appPath = path.join(__dirname, "..", "dist");
app.use(express.static(appPath));

router(app);

const port = 3000;
const server = http.createServer(app);
server.listen(port, () => {console.log(`Application listening to port ${port}`); }
);
