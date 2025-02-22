const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");

// Enable CORS (allows React frontend to fetch from the backend)
app.use(cors());

// Serve JSON file at `/api/logements`
app.get("/api/logements", (req, res) => {
  res.sendFile(path.join(__dirname, "logements.json"));
});

// Start the server
const PORT = 5555; // Change this if needed
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
