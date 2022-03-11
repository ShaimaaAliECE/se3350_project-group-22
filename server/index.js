const express = require("express");
const res = require("express/lib/response");
const path = require("path");
const dbo = require("./db/conn"); //database connection
const cors = require("cors");

const app = express(); // create express app

require("dotenv").config({ path: "./config.env" });

app.use(require("./routes/record"));

app.use(express.static(path.join(__dirname, "../../client", "build"))); // displaying react app first
app.use(express.static("../../client")); // adding middleware

//cors middleware
app.use(cors());
app.use(express.json());

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "../../client", "build", "index.html"));
});

// ------------------------------------------------- code for level one -------------------------------------------------------

// handles returning the next step of the algorithm
app.get("/levelOne", (req, res, next) => {
  res.sendFile(
    path.join(
      __dirname,
      "../../client/src/components/pages",
      "level1page",
      "levelone.html"
    )
  );
});

app.get("/prev-step", (req, res, next) => {});

// handles generating an array of any number of numbers in a given range
app.get("/generate-numbers", (req, res, next) => {
  // get range and number of numbers from the request object
  let range = req.query.range;
  let num = req.query.num;
  let randomNumsArr = [range, num]; // define array of hold generated numbers

  // --------------------- code to generate random numbers goes here -----------------------

  // push the numbers from the algorithm into the array
  // send back the array of random numbers generated
  res.send(randomNumsArr);
});

// handles verifying the user's input
app.get("/check-answer", (req, res, next) => {
  res.send("<p>wrong</p>");
});

// starting server on the same port as the react app
app.listen(3000, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
  });
  console.log(`Server is running on port: ${3000}`);
});
