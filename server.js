const express = require("express");
const app = express();
const server = require("http").createServer(app);
let port = 2020;

app.set("view engine", "ejs");
app.get("/fileTransfer/api/v1", (req, res) => {
    res.render("file");
});

server.listen(port, () => {
    console.debug(`File Transfer Server Listen...${port}`);
});
