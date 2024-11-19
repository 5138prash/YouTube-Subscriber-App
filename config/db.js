const mongoose = require('mongoose');

// Function to establish a connection to the MongoDB database
function connectToDB() {
    // Use mongoose to connect to the database using the connection string from environment variables
    mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }) 
        .then(() => {
          
            console.log('Connected to database');
        })
        // You can also add a .catch() block here to handle connection errors, if needed
        // .catch(err => console.error('Database connection error:', err));
}

// Export the connectToDB function so it can be used in other parts of the application
module.exports = connectToDB;
