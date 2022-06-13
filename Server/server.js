const express = require('express');
const app = express();
const sequalize = require("./db")
sequalize.sync({})
const http = require('http');
app.use(express.urlencoded())
app.use(express.json())
const server = http.createServer(app);
const cors = require("cors");
app.use(cors());


const routes = require('./routes')

const io = require("socket.io")(5000, {
    cors:{ 
        origin:["http://localhost:3000"]}});


io.on("connection", (socket)=>{
    console.log("User online");

    socket.on("canvas-data",(data)=>{

        
        socket.broadcast.emit("canvas-data", data);
    })
})

app.use("/", routes)
server.listen(5001, () => {
    console.log('listening on *:5001');
  });