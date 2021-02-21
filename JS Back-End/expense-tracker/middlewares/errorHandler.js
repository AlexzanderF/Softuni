module.exports = function (err, req, res, next) {
    console.error(err);
    const statusCode = 500;
    const message = 'Something went wrong!';

    res.status(statusCode);
    res.render('home/404-and-notifications', { message, statusCode })
    return;
}
