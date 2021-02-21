const express = require('express');
const app = express();
const { port } = require('./config/config');
const cors = require('./middlewares/cors');
const routes = require('./routes');
require('./config/database');

app.use(express.json());
app.use(cors());

app.use('/api', routes);

app.listen(port, () => console.log(`Server is running on port: ${port}...`));