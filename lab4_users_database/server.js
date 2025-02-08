const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8081;

connectDB();

app.use(express.json());
app.use("/api", userRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
