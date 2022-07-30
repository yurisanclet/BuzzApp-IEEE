import {CreateServer} from "http";
import express from "express";
import {Server, Socket} from "socket.io";
import routes from "./routes";
const app = express();
app.use(cors());
const http = createServer(app);

const io = new Server(http, {
  cors: {
    origin: '*'
  }
});

app.use(express.json())
app.use(routes)

io.on("connection", (Socket) => {
  console.log("connected:", socket.id);
});


export {http, app, io }

