const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require("socket.io")(5000, {
    cors:{ 
        origin:["http://localhost:3000"]}});


io.on("connection", (socket)=>{
    console.log("User online");

    socket.on("canvas-data",(data)=>{
        socket.broadcast.emit("canvas-data", data);
    })
})

// server.listen(5000, () => {
//     console.log('listening on *:3000');
//   });