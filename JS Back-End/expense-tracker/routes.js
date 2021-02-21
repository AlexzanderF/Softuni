const router = require('express').Router();
const homeController = require('./controllers/homeController');
const authController = require('./controllers/authController');
const expenseController = require('./controllers/expenseController');
const auth = require('./middlewares/auth');
const errHandler = require('./middlewares/errorHandler');

router.use(auth());

router.use(expenseController);
router.use(homeController);
router.use(authController);

router.all('*', (req, res) => {
    res.render('home/404-and-notifications');
});
router.use(errHandler);


module.exports = router;