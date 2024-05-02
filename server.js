const express = require("express");
const dotenv = require("dotenv").config();
const helmet = require("helmet");
const connectDB = require("./Config/connect.mongoDB");

const app = express();



// MIDDLEWARES
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



// ROUTES
app.get("/", (req, res) => {
  res.send("Server is now running");
});



const PORT = process.env.PORT || 5000;
// SERVER RUNNING
const runServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

runServer();
