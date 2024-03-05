import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
  },
});

// To get user online status {userId: socketId}
const userSocketMap = {};

io.on("connection", (socket) => {
  console.log("A user connected", socket.id);

  const userId = socket.handshake.query.userId;
  if (userId != "undefined") {
    userSocketMap[userId] = socket.id;
  }

  // io.emit is used to send events to all connected users
  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  //socket.on is used to listen to events can be used both on client and server
  socket.on("disconnect", () => {
    console.log("user disconnected", socket.id);
    // Once disconnect offline shown
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

export { app, io, server };
