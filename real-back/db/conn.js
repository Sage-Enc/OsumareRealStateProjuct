const mongoose = require("mongoose");
const DB = process.env.DATABASE;

mongoose
  .connect(DB, {
    autoCreate: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 10000,
  })
  .then(() => {
    console.log("connected successfully");
  })
  .catch((err) => {
    console.error("connection error:", err);
  });
mongoose.set("debug", false);
module.exports = mongoose;

//thi is the password for new :-  myspaceindia
