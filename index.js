const express = require("express");
const axios = require("axios");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const API_KEY = process.env.API_KEY;

app.use(cors());

// Helper to create full API URL
const buildUrl = (file) =>
  `https://api.cnhsalumniassociation.ph/resources/json/${file}.json?api_key=${API_KEY}`;

app.get("/api/provinces", async (_req, res) => {
  try {
    const response = await axios.get(buildUrl("provinces"));
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch provinces" });
  }
});

app.get("/api/cities", async (_req, res) => {
  try {
    const response = await axios.get(buildUrl("cities"));
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch cities" });
  }
});

app.get("/api/barangays", async (_req, res) => {
  try {
    const response = await axios.get(buildUrl("barangays"));
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch barangays" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Proxy server running at http://localhost:${PORT}`);
});
