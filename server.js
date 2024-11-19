const express = require('express');
const app = express();
const connectToDB = require('./config/db');
const subscriberRouter = require('./routes/subscriber.routes');
require('dotenv').config(); // Load environment variables

// Connect to the database
connectToDB();

// Set the port from environment variables or use default 3000
const port = process.env.PORT || 3000;

// Set the view engine to EJS for rendering templates
app.set('view engine', 'ejs');

// Middleware to parse JSON and URL-encoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes for subscriber-related endpoints
app.use('/api', subscriberRouter);
app.get('/', (req, res) => {
    res.render('index');
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log("Server is running on port 3000.");
});
