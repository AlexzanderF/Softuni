const homeController = require('./controllers/homeController');
const userController = require('./controllers/userController');
const courseController = require('./controllers/courseController');
const auth = require('./middlewares/auth');

module.exports = (app) => {
    app.use(auth());

    app.use(homeController);
    app.use('/course', courseController);
    app.use(userController);

    app.all('*', (req, res) => {
        res.send('Error 404');
    });
};