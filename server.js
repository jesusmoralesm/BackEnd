// server.js
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", service: "backend", time: new Date().toISOString() });
});

app.get("/api/v1/hello", (req, res) => {
  res.json({ message: "Hello from DevBank backend!" });
});

app.get("/", (req, res) => {
  res.send("Welcome to the DevBank backend!");
});

app.listen(PORT, () => {
  console.log(`Backend listening on port ${PORT}`);
});
