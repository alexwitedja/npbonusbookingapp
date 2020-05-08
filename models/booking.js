const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    studentid:{
        type:String,
        required: true,
        unique: true
    },
    demoDateAndTime:{
        type: Date,
        required: true,
        unique: true
    },
    demoTool:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Booking', bookingSchema)