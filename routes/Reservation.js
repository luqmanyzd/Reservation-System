const { request, response } = require("express");
const express = require("express");
const res = require("express/lib/response");
const router = express.Router();

//importing schemas from models folder
const Reservation = require("../models/Reservation");

//routes

//landing page
router.get("/", (request, response) => {
    response.render("home");
})

//get form 
router.get("/createnew", (request, response) => {
    response.render("reservationCreate");
})

//create new reservation
router.post("/createnew", async (request, response) => {
    let newBooking = await new Reservation({
        days: request.body.days,
        hours: request.body.hours,
        name: request.body.fullName,
        contact: request.body.contact,
        email: request.body.email,
        personNum: request.body.personNum
    })
    newBooking.save();
    response.render("reservationSuccess");
    
})

//get all reservations made
router.get("/allreservations", (request, response) => {
    Reservation.find({}, (error,booking) => {
        if (error) {
            console.log(error);
        }
        else {
            response.render("reservationsList", {booking : booking});
        }
    })
})

//delete reservation
router.get("/delete/:id", async (request, response) => {
    await Reservation.findByIdAndDelete( { _id: request.params.id} );
    response.redirect("/allreservations");
})

module.exports = router;