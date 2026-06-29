const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const sequelize = require("./config/db");
const authRoutes = require("./routes/authRoutes");
require("./models/User");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Server Running...");
});

const PORT = process.env.PORT || 5000;

// Connect Database and Sync Tables
sequelize
  .authenticate()
  .then(() => {
    console.log("Database Connected");

    return sequelize.sync();
  })
  .then(() => {
    console.log("Tables Synced");

    app.listen(PORT, () => {
      console.log(`Server Running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });