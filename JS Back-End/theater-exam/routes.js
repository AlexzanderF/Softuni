// MAIN ROUTER
const router = require('express').Router();
const homeController = require('./controllers/homeController');
const authController = require('./controllers/authController');
const playsController = require('./controllers/playsController');
const auth = require('./middlewares/auth');
const errHandler = require('./middlewares/errorHandler');

router.use(auth());

router.use(authController);
router.use(homeController);
router.use(playsController);
router.use(errHandler);

router.all('*', (req, res) => {
    res.send('Error 404: Page not found');
});

module.exports = router;


// module.exports = (app) => {
//     app.use(auth());

//     app.use(homeController);
//     app.use(playsController);
//     app.use(authController);

//     app.all('*', (req, res) => {
//         res.send('Error 404');
//     });
// };