const jwt = require('jsonwebtoken');
const { SECRET } = require('../config/config');

module.exports = function () {
    return (req, res, next) => {
        if (req.cookies['USER_CRED']) {
            try {
                const decodedToken = jwt.verify(req.cookies['USER_CRED'], SECRET);
                req.user = decodedToken;
                res.locals.username = decodedToken.username;
            } catch (error) {
                console.log(error);
                res.clearCookie('USER_CRED');
            }
        }
        next();
    }
}
