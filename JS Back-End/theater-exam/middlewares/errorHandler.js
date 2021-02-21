module.exports = function (err, req, res, next) {
    if (!err) return;
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Something went wrong!';
    console.error(err);
    res.status(statusCode);
    res.send(err.name + ': ' + message);
    return;
}
