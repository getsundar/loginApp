const request = require('request');
const express = require('express');
const hostname = '127.0.0.1';
const port = 9000;
const app = express();
const cors = require('cors');
app.use(cors());
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
app.post('/loginUser', (req, res) => {
  request('https://demo-api.now.sh/users', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body);
    } else {
      res.send("Error occured with the code : " + response.statusCode);
    }
  });
});
