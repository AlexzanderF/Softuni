const http = require('http');
const port = 3001;
const handlers = require('./handlers/handlers');

function requestHandler(req, res) {
    for (let handler of handlers) {
        if (!handler(req, res)) {
            break;
        }
    }
}

http.createServer(requestHandler).listen(port, () => console.log(`Server is listening on port ${port}...`)
);