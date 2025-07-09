const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/pairs', async (req, res) => {
  try {
    const response = await axios.get('https://api.dexscreener.com/latest/dex/pairs/bsc');
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'pairs alınamadı' });
  }
});

app.get('/profiles', async (req, res) => {
  try {
    const response = await axios.get('https://api.dexscreener.com/token-profiles/latest/v1');
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'profiles alınamadı' });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy sunucu çalışıyor: http://localhost:${PORT}`);
});
