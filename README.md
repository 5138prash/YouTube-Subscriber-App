# Youtube Subscribers App

Welcome to the **Youtube Subscribers App**! This application provides a simple interface to interact with a MongoDB database containing information about YouTube subscribers.

 ## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [License](#license)
- [Contributing](#contributing)

##  Introduction
The **YouTube Subscribers App** is a full-stack web application built using Express.js and MongoDB. It demonstrates key principles of RESTful APIs and database interactions, making it ideal for developers seeking a simple yet powerful way to manage subscriber data.

##  Features
- Fetch all subscribers from the database.
- Retrieve names and subscribed channels of all subscribers.
- Get detailed information about a subscriber by their unique ID.

##  Installation

### Prerequisites
- Node.js and npm installed.
- A running MongoDB server (local or remote).

### Steps
1. **Clone the repository:**
    ```bash
    git clone https://github.com/5138prash/youtube-subscriber-app.git
    cd youtube-subscriber-app
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Set up MongoDB:**
    - Ensure your MongoDB server is running.
    - The app connects to MongoDB at:
      `mongodb://localhost:27017/subscribers`.

4. **Start the application:**
    ```bash
    npm start
    ```

5. **Access the application:**
   Open your browser and go to `http://localhost:3000` to view the app.

##  Usage

### Frontend
The frontend is a simple ejs page for testing API interactions. Features include:
- **Get Subscribers:** Displays all subscribers.
- **Get Subscribers Names:** Displays names and subscribed channels.
- **Search:** Fetches details for a specific subscriber.

### Backend
The backend, built with Express.js, provides the following API routes:

| Endpoint                       | Description                                     |
|--------------------------------|-------------------------------------------------|
| **GET /api/subscribers**       | Fetches all subscribers.                        |
| **GET /api/subscribers/names** | Fetches names and subscribed channels.          |
| **GET /api/subscribers/:id**   | Fetches details of a specific subscriber by ID. |
|                                |                                                 |
## 📡 API Endpoints

### **GET /api/subscribers**
Fetches all subscribers from the database.

**Sample Response:**
```json
[
  {
"_id": "673c4417e44edec6b4766fab",
"name": "Jeread Krus",
"subscribedChannel": "CNET",
"subscribedDate": "2024-11-20T06:50:04.408Z"
},
  ...
]
```
### GET /api/subscribers/names
Fetches names and subscribed channels of all subscribers.
- **Sample Response:**
    ```json
    [
        {
            "name": "Jeread Krus",
            "subscribedChannel": "CNET",
        },
        ...
    ]
    ```
### GET /api/subscribers/:id
Fetches a subscriber by their ID.
- **Sample Response:**
    ```json
    {
        "_id": "673c4417e44edec6b4766fab",
        "name": "Jeread Krus",
        "subscribedChannel": "CNET",
        "subscribedDate": "2024-11-20T06:50:04.408Z"
    }
    ```
## Technologies Used
- **Frontend:** ejs, Tailwindcss, javascript, Flowbite
- **Backend:** Node.js, Express.js
- **Database:** MongoDB

## License
&copy; 2024, Prashant Tripathi

## Contributing
We welcome contributions to improve this project!

Contribute to this project by forking the repository and submitting pull requests. If you have any feedback or encounter issues, feel free to open an issue on GitHub.
