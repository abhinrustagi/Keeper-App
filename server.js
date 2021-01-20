const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const notesRouter = require("./routers/Notes");
const authRouter = require("./routers/Auth");

require("dotenv").config();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connection established to the database.");
});

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/notes", notesRouter);
app.use("/auth", authRouter);

app.listen(8888 || process.env.PORT, () => {
  console.log("Server started.");
});
