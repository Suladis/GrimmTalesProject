const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// Parse application/json
app.use(bodyParser.json());

app.post('/formData.json', (req, res) => {
  // Handle form data
  const formData = req.body;

  fs.readFile('formData.json', 'utf8', (err, data) => {
    if (err) {
      // Handle the error
      console.error('Error reading formData.json:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    // Log the initial content of formData.json
    console.log('Initial content of formData.json:', data);

    // Parse existing data
    let existingData;
    try {
      existingData = JSON.parse(data);
    } catch (parseError) {
      console.error('Error parsing formData.json:', parseError);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    // Append new form data
    existingData.formData.push(formData);

    // Write the updated data back to formData.json
    fs.writeFile('formData.json', JSON.stringify(existingData), 'utf8', (err) => {
      if (err) {
        console.error('Error writing to formData.json:', err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }

      console.log('Form Data appended to formData.json:', formData);

      res.status(200).json({ message: 'Form data received successfully' });
    });
  });
});

app.post('/discData.json', (req, res) => {
  // Handle form data
  const discData = req.body;

  fs.readFile('discData.json', 'utf8', (err, data) => {
    if (err) {
      // Handle the error
      console.error('Error reading discData.json:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    // Log the initial content of discData.json
    console.log('Initial content of discData.json:', data);

    // Parse existing data
    let existingDiscData;
    try {
      existingDiscData = JSON.parse(data);
    } catch (parseError) {
      console.error('Error parsing discData.json:', parseError);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    // Append new form data
    existingDiscData.discData.push(discData);

    // Write the updated data back to discData.json
    fs.writeFile('discData.json', JSON.stringify(existingDiscData), 'utf8', (err) => {
      if (err) {
        console.error('Error writing to discData.json:', err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }

      console.log('Form Data appended to discData.json:', discData);

      res.status(200).json({ message: 'Form data received successfully' });
    });
  });
});



// Serve static files from the current directory
app.use(express.static(__dirname));

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
