const router = require('express').Router();
const jwt = require('jsonwebtoken');
const userService = require('../services/userService');
const isGuest = require('../middlewares/isGuest');
const isAuthenticated = require('../middlewares/isAuthenticated');
const { SECRET, COOKIE_NAME } = require('../config/config');

router.get('/register', isGuest, (req, res) => {
    res.render('user/register');
});

router.post('/register', isGuest, (req, res) => {
    userService.register(req.body)
        .then((user) => {
            const token = jwt.sign({ id: user._id, username: user.username }, SECRET)
            res.cookie(COOKIE_NAME, token);
            res.redirect('/');
        })
        .catch(e => {
            res.render('user/register', { error: e.message, ...req.body });
            console.error(e);
        });
});

router.get('/login', isGuest, (req, res) => {
    res.render('user/login');
});

router.post('/login', isGuest, (req, res) => {
    userService.login(req.body)
        .then((token) => {
            res.cookie(COOKIE_NAME, token);
            res.redirect('/');
        })
        .catch(e => {
            res.render('user/login', { error: e.message, ...req.body });
            console.error(e);
        });
});

router.get('/logout', isAuthenticated, (req, res) => {
    res.clearCookie(COOKIE_NAME);
    res.redirect('/');
});

module.exports = router;