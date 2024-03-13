const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
mongoose.set("debug", true);
const cors = require("cors");
dotenv.config({ path: "./config.env" });

require("./db/conn");
app.use(express.json());
app.use(cors());
app.use(require("./router/auth"));

const PORT = 5000;

app.use("/api", require);
app.listen(PORT, () => {
  console.log(`server is running at port no ${PORT}`);
});
