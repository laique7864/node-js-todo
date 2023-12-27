import express from "express";
import todoRoute from "./routes/todoRoute";
import connectDB from "./db";
import cors from 'cors'

const app = express();
const port = 3002;
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World with TypeScript and Express!");
});
app.use("/api", todoRoute);
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
