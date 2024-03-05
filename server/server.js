import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import messagesRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socketServer.js";

dotenv.config();
const PORT = process.env.PORT || 3001;
// This will help to get extract the data from body
app.use(express.json());

// Middle ware cookie parser
app.use(cookieParser());

// Middle ware for handling cors policy error
// Option:1 Allow all origins with default of cors(*)
app.use(cors());

//Middlewares
app.use("/api/auth", authRoutes);

// Middleware for message
app.use("/api/messages", messagesRoutes);

// Middleware for users
app.use("/api/users", userRoutes);

// app.get("/", (req, res) => {
//   res.send("Server is running");
// });

server.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is running at ${PORT}`);
});
