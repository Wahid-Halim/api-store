require("dotenv").config();

const express = require("express");
const app = express();

const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");

//middleware
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("<h1>Store api</h1> <a href='/api/v1/products'>Products routes</a>");
});

// product routes

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    //connect db
    app.listen(PORT, console.log(`Server is listening...`));
  } catch (error) {
    console.log(error);
  }
};
start();
