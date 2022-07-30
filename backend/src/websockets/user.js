import { io } from "../http"

io.on("connection", (socket) => {
  socket.on("chat-message", (data)=>{
      io.to(data.roomId).emit('chat-message', data);
  });



  socket.on("disconnect", (socket) => {
    console.log(socket)
  });


  socket.on("room", (room)=> {
      console.log("enter in room ", room, "and socket", socket.id)
      socket.join(room);
  })
})