import express from 'express';
import { createServer } from "http";
import { Server } from "socket.io";
import { PORT } from './config';


const app = express()
const httpServer = createServer(app);

const io = new Server(httpServer, { /* options */ });

io.on("connection", (socket) => {
  console.log(socket);
  
});
console.log(io);

httpServer.listen(PORT, () => {
  console.log(`Http server is runnning on port : ${PORT}`);
});