const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Node.js CI/CD Demo API!");
});

app.get("/api/health", (req, res) => {
  res.json({ status: "UP", message: "Service is running successfully" });
});

app.post("/api/data", (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: "Missing fields" });
  }
  res.status(201).json({ message: `Data received for ${name}` });
});

module.exports = app;
