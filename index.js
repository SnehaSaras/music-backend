const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

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

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
