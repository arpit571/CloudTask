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
    res.send("CloudTask Backend Running 🚀");
});

app.get("/api/health", (req, res) => {
    res.json({
        status: "Healthy"
    });
});

app.use("/api/tasks", taskRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});