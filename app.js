require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

app.get('/', (req, res) => {
  // Get the current datetime in ISO 8601 format
  const currentDatetime = new Date().toISOString();

  // Send the required JSON response
  res.json({
    email: 'damolaadegbite77@gmail.com',  // Replace with your actual email
    current_datetime: currentDatetime,
    github_url: 'https://github.com/dax-side/hng12-stage0-backend',  // Replace with your actual GitHub URL
  });
});

// Start the server
app.listen(port, () => {
  console.log(`API is running on http://localhost:${port}`);
});
