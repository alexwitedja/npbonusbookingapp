const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const logger = require('./middleware/logger');
const timeslots = require('./Timeslot')
const Booking = require('./models/booking')
const mongoose = require('mongoose')

const app = express();

const uri = "mongodb://localhost:27017"

// MongoDB Connection
mongoose.connect(uri + '/npdemo', { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

// Init middleware
// app.use(logger);

// Handlebars Middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Homepage Route
app.get('/', async (req, res) => {
    const filter = {}
    var bookings = {}
    try {
      bookings = await Booking.find(filter);
    } catch(err) {
      console.log(err);
    }
    res.render('index', {
      title: 'Booking App',
      bookings,
      timeslots
    })
  }
);

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Members API Routes
app.use('/api/bookings', require('./routes/api/bookings'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
