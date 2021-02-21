const app = require('express')();
const routes = require('./routes');
const { port } = require('./config/config');

require('./config/database');
require('./config/express')(app);

app.use(routes);

app.listen(port, () => console.log(`Server is running on port: ${port}...`));