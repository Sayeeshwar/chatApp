const express=require('express');
const socketio=require('socket.io');
const http=require('http');

const {addUser,removeUser,getUser,getUsersInRoom}=require('./users')

const PORT= process.env.PORT||5000
const router=require('./router');

const app=express();
const server= http.createServer(app)
const io = socketio(server);

io.on('connection',(socket)=>{
    console.log("New connection!");

    socket.on('join',({name,room})=>{
        console.log(`${name} has joined ${room}`)
    })


    socket.on('disconnect',()=>{
        console.log("Connection disconnected!")
    })

})


app.use(router);
server.listen(PORT,()=> console.log(`Server has started on port ${PORT}`));