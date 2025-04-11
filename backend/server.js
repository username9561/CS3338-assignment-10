const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Fake data to simulate a response from a real database
const fakeData = {
  message: "Hello from the fake backend! This is dummy data."
};

// Endpoint to simulate getting data
app.get('/', (req, res) => {
  res.json(fakeData);
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
