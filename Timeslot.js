const timeslots = [
]

generateTimeslots(17)

function generateTimeslots(hours) {
    // Creates 10 minute interval timeslots from 8 to X hours.
    for(var i = 8; i < hours; i++) {
        for(var j = 0; j < 6 + 1; j++) {
            var timeslot = 00;
            if (j == 6) {
                timeslot = i + 1 + ":00"
            } else {
                timeslot = i + ":" + j + "0"
            }
            timeslots.push(timeslot);
        }
    }
}

module.exports = timeslots;