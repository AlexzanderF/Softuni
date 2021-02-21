const router = require('express').Router();

router.post('/register', (req, res) => {

});

router.get('/login', (req, res) => {
    res.json({ message: 'Login page', number: 619 });
});

module.exports = router;