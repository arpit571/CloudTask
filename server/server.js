require("dotenv").config();

const express = require("express");
const cors = require("cors");

const taskRoutes = require("./routes/taskRoutes");

const connectDB = require("./config/db");

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        project: "CloudTask",
        version: "1.0.0",
        status: "Running"
    });
});

app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "UP",
    application: "CloudTask",
    database: "Connected",
    docker: true,
    timestamp: new Date(),
  });
});

app.use("/api/tasks", taskRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});