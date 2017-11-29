const express = require('express');
const compression = require('compression');
const path = require('path');

const app = express();

app.use(compression());

// serve static files
app.use(express.static('build'));

// serve service-worker.js
app.get('/service-worker.js', (req, res) => {
  res.sendFile(path.resolve(__dirname, './build/service-worker.js'));
});

// redirect all requests to index.html
app.use((req, res) => {
  res.sendFile(path.resolve(__dirname, './build/index.html'));
});

// starting listening
const port = process.env.PORT || 3434;
app.listen(port, () => {
  console.log(`Website server listening on ${port}.`); // eslint-disable-line no-console
});
