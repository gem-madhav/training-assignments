require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");

const errorController = require("./controllers/error");

const mongoUrl = process.env.DB_URI

const app = express();


const mainRoutes = require("./routes/mainRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/record",mainRoutes);

app.use(errorController.get404);

mongoose
  .connect(
    mongoUrl,
    {
      useNewUrlParser: true,
      // useFindAndModify: false,
      // useCreateIndex: true,
      useUnifiedTopology: true,
    }
  )
  .then((result) => {
    console.log("Connected to Mongodb");
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
