const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { generateEmailTemplate } = require("./aiService");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "Server is running" });
});

app.post("/api/emailFormat", generateEmailTemplate);

app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);
