import express, { Request, Response } from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const API_KEY = process.env.API_KEY;

app.use(cors());

// Helper to create full API URL
const buildUrl = (file: string): string =>
  `https://api.cnhsalumniassociation.ph/resources/json/${file}.json?api_key=${API_KEY}`;

app.get("/api/provinces", async (_req: Request, res: Response) => {
  try {
    const response = await axios.get(buildUrl("provinces"));
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch provinces" });
  }
});

app.get("/api/cities", async (_req: Request, res: Response) => {
  try {
    const response = await axios.get(buildUrl("cities"));
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch cities" });
  }
});

app.get("/api/barangays", async (_req: Request, res: Response) => {
  try {
    const response = await axios.get(buildUrl("barangays"));
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch barangays" });
  }
});

app.listen(PORT, () => {
  console.log(
    `🚀 Proxy server running at https://:system.cnhsalumniassociation.ph:${PORT}`
  );
});
