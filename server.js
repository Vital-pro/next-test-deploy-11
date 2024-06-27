const express = require('express');
const app = express();
const PORT = process.env.PORT || 3333;
const cors = require('cors');

app.use(cors());

app.use('/', express.static('public'));

app.get('/data', async (req, res) => {
  let lat = req.query.lat;
  let lon = req.query.lon;
  let resData = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}9&lon=${lon}&appid=325f30978fbd6d014691785ced717615&units=metric`
  );
  let resJson = await resData.json();
  console.log(resJson)
  console.log(resJson.name + ' ' + resJson.main.temp);
  res.json({
    'city': resJson.name,
    'temperature': resJson.main.temp
  });
});

app.get('/api/weather', (req, res) => {
  res.json({
    'temperature': 33,
  });
});


app.listen(PORT, () => console.log(`Server has started on http://localhost:${PORT}`));