import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
const app = express();

dotenv.config();
const PORT = process.env.PORT || 3001;
// This will help to get extract the data from body
app.use(express.json());

//Middlewares
app.use("/api/auth", authRoutes);

// app.get("/", (req, res) => {
//   res.send("Server is running");
// });

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is running at ${PORT}`);
});
