import express from "express";
import * as dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import messagesRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
const app = express();

dotenv.config();
const PORT = process.env.PORT || 3001;
// This will help to get extract the data from body
app.use(express.json());

// Middle ware cookie parser
app.use(cookieParser());

//Middlewares
app.use("/api/auth", authRoutes);

// Middleware for message
app.use("/api/messages", messagesRoutes);

// Middleware for users
app.use("/api/users", userRoutes);

// app.get("/", (req, res) => {
//   res.send("Server is running");
// });

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is running at ${PORT}`);
});
