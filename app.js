require("dotenv").config();

const express = require("express");
const app = express();

// DB connect
const connectDB = require("./db/connect");

const productsRoutes = require("./routes/productsRoutes");

const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");

//middleware
app.use(express.json());

// routes

app.use("/api/v1/products", productsRoutes);

app.get("/", (req, res) => {
  res.send("<h1>Store api</h1> <a href='/api/v1/products'>Products routes</a>");
});

// product routes

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, console.log(`Server is listening...`));
  } catch (error) {
    console.log(error);
  }
};
start();
