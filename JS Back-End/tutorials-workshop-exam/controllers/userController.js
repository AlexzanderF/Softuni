const router = require('express').Router();
const jwt = require('jsonwebtoken');
const userService = require('../services/userService');
const isGuest = require('../middlewares/isGuest');
const isAuthenticated = require('../middlewares/isAuthenticated');
const { SECRET } = require('../config/config');

router.get('/register', isGuest, (req, res) => {
    res.render('register');
});

router.post('/register', isGuest, (req, res) => {
    userService.register(req.body)
        .then((user) => {
            const token = jwt.sign({ id: user._id, username: user.username }, SECRET)
            res.cookie('USER_CRED', token);
            res.redirect('/');
        })
        .catch(e => { res.render('register', { message: e.message, data: req.body }); console.log(e); });
});

router.get('/login', isGuest, (req, res) => {
    res.render('login');
});

router.post('/login', isGuest, (req, res) => {
    userService.login(req.body)
        .then((token) => {
            res.cookie('USER_CRED', token);
            res.redirect('/');
        })
        .catch(e => res.render('login', { message: e.message, data: req.body }));
});

router.get('/logout', isAuthenticated, (req, res) => {
    res.clearCookie('USER_CRED');
    res.redirect('/');
});

module.exports = router;
