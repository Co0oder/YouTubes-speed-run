const express = require('express');
const {PORT} = require('./config');
const routes = require('./routes');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(PORT, () => console.log(`Server is running on the port ${PORT}`));