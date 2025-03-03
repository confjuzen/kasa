const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());

// Read logements.json once (for performance)
const logementsPath = path.join(__dirname, "logements.json");

function getLogements() {
  return JSON.parse(fs.readFileSync(logementsPath, "utf8"));
}

// Route to get ALL logements
app.get("/api/logements", (req, res) => {
  res.json(getLogements());
});

// Route to get logement by ID
app.get("/api/logements/:id", (req, res) => {
  const logements = getLogements();
  const logement = logements.find((item) => item.id == req.params.id);

  if (!logement) {
    return res.status(404).json({ error: "Logement not found" });
  }

  res.json(logement);
});

const PORT = 5555;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
