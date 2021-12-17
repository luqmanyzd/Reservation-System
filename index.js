const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const router = require("./routes/Reservation");
require("dotenv").config()

//initiate express as app
const app = express();

//listen to server
const port = process.env.PORT || 5000;
app.listen(port, ()=>{ console.log(`Server is listening to port ${port} at http://localhost:${port}`)})

//connect to mongodb
mongoose.connect("mongodb://localhost:27017/Reservations");

const database = mongoose.connection;

database.once("connected", () => console.log("Database is successfully connected"));

//middleware
app.use("/assets", express.static("assets"));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(router);
app.set("view engine","ejs");