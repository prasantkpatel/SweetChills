const express = require('express');
const routes = require('./routes/main');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());
app.use('/', routes);

app.listen(port, () => {
    console.log('Server listening on port', port);

}).on('error', (err) => {
    console.error(err);

});