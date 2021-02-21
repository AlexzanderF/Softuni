module.exports = function () {
    return function (req, res, next) {
        // localhost:3000 is where our front-end code is hosted and we allow it to use the API
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        // allowed request methods
        res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
        // allowed http headers
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

        next();
    };
}