const express = require('express');
const router = express.Router();
const Booking = require('../../models/booking')

// Create Booking
router.post('/', async (req, res) => {
  const splitTime = req.body.time.split(":")
  const splitDate = req.body.date.split("-")
  const booking = new Booking({
    studentid: req.body.studentid,
    name: req.body.name,
    demoDateAndTime: new Date(splitDate[0], splitDate[1], splitDate[2], splitTime[0], splitTime[1], 0, 0),
    demoTool: req.body.demotool,
  });

  try {
    const newBooking = await booking.save()
    res.status(201).redirect('/')
  } catch(err) {
    res.status(400).json({ message: err.message + " GO back and retry" })
  }

  // res.redirect('/');
});

module.exports = router;
