const express = require('express');
const router = express.Router();
const {allSubscribers, subscriberById, subscriberByName} = require('../controller/subscriberController');

// Middleware to parse JSON and URL-encoded data
router.use(express.json());
router.use(express.urlencoded({extended: true}));

// Render the home page
router.get('/home', (req, res) => {
    res.render('index');
});

// Route to fetch all subscribers
router.get('/subscribers', allSubscribers);

// Route to fetch subscriber by name
router.get('/subscribers/name', subscriberByName);

// Route to fetch subscriber by ID
router.get('/subscribers/:id', subscriberById);

module.exports = router;
