const express = require('express');
const cors = require('cors');
const app = express();

// Use dynamic port (important for OpenShift)
const PORT = process.env.PORT || 8080;

app.use(cors());

const songs = {
  happy: "https://www.youtube.com/watch?v=ZbZSe6N_BXs",
  sad: "https://www.youtube.com/watch?v=RgKAFK5djSk",
  angry: "https://www.youtube.com/watch?v=04F4xlWSFh0"
};

app.get('/song/:mood', (req, res) => {
  const mood = req.params.mood;
  const link = songs[mood];
  if (link) {
    res.json({ link });
  } else {
    res.status(404).json({ error: 'Mood not found' });
  }
});

// Listen on all network interfaces to work correctly in OpenShift
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend running on http://0.0.0.0:${PORT}`);
});

