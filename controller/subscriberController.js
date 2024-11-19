// Importing the subscriber model to interact with the 'subscribers' collection in the database
const subscriberSchema = require('../models/subscriber.model');

// Controller to fetch all subscribers
const allSubscribers = async (req, res) => {
    try {
        const subscribers = await subscriberSchema.find(); // Fetch all subscribers from the database
        res.status(200).json(subscribers); // Respond with all subscribers
    } catch (error) {
        res.status(400).json({ message: error.message }); // Handle any errors
    }
};

// Controller to fetch subscribers' names and subscribed channels
const subscriberByName = async (req, res) => {
    try {
        const subscribers = await subscriberSchema.find({}, { name: 1, subscribedChannel: 1, _id: 0 }); // Only fetch name and subscribedChannel fields
        res.status(200).json(subscribers); // Respond with the filtered data
    } catch (error) {
        res.status(400).json({ message: error.message }); // Handle any errors
    }
};

// Controller to fetch a specific subscriber by their ID
const subscriberById = async (req, res) => {
    const { id } = req.params; // Extract 'id' from the request parameters
    try {
        const subscriber = await subscriberSchema.findById(id); // Find subscriber by _id
        if (!subscriber) {
            res.status(404).json({ message: "No subscriber found" }); // Return 404 if subscriber not found
        } else {
            res.status(200).json(subscriber); // Respond with the subscriber details
            console.log(subscriber); // Log the subscriber for debugging (optional)
        }
    } catch (error) {
        res.status(400).json({ message: error.message }); // Handle any errors
    }
};

// Export the controller functions for use in routing
module.exports = {
    allSubscribers,
    subscriberById,
    subscriberByName
};
