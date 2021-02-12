const app = require('express')();
const { port } = require('./config/config');

require('./config/database');
require('./config/express')(app);
require('./routes')(app);

app.listen(port, console.log(`Server is running on port ${port}...`));