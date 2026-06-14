const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const authRoutes = require("./routes/authRoutes");
const postRoutes = require("./routes/postRoutes");
const commentRoutes = require("./routes/commentRoutes");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);
app.get("/", (req, res) => {
  res.send("Blog Platform Backend is Running 🚀");
});

app.get("/api", (req, res) => {
  res.json({
    message: "Blog API is running",
  });
});
app.listen(process.env.PORT, () => {
  console.log(`Server running on ${process.env.PORT}`);
});
app.get("/api", (req, res) => {
  res.json({ message: "Blog API is running" });
});