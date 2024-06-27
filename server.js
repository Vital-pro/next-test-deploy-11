const express = require('express');
const app = express();
const PORT = process.env.PORT || 3333;

app.use('/', express.static('public'));

app.get('/api/weather', (req, res) => {
  res.json({'temperature': 30});
});

app.listen(PORT, () => console.log(`Server has started on http://localhost:${PORT}`));