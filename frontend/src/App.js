import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Simulate fetching data from the backend
    axios.get('http://localhost:5000')  // This URL will point to the fake backend
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.error("There was an error fetching the message:", error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Welcome to the frontend!</h1>
      <hr />
      <h2>{message}</h2>
    </div>
  );
}

export default App;
