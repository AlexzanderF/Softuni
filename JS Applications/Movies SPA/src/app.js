import { logout, login, register, getCurrUserInfo } from "./util/auth.js";
import { addMovie, getAllMovies, getById } from './util/data.js';

const app = Sammy('#container', function () {
    this.use('Handlebars', 'hbs');

    this.get('/', function () {
        this.redirect('#/home');
    });
    this.get('/home', async function () {
        let templateData = getCurrUserInfo();
        if (templateData) {    // if the user is logged
            templateData.movies = await getAllMovies();
        }

        this.partials = {
            header: await this.load('./src/templates/header.hbs'),
            movie: await this.load('./src/templates/movie.hbs')
        }
        this.partial('./src/templates/home.hbs', templateData);
    });
    this.get('/login', function () {
        if (getCurrUserInfo()) {
            this.redirect('#/home');
        } else {
            this.loadPartials({
                header: './src/templates/header.hbs'
            }).then(function () {
                this.partial('./src/templates/login.hbs', getCurrUserInfo());
            });
        }
    });
    this.get('/register', function () {
        if (getCurrUserInfo()) {
            this.redirect('#/home');
        } else {
            this.loadPartials({
                header: './src/templates/header.hbs'
            }).then(function () {
                this.partial('./src/templates/register.hbs', getCurrUserInfo());
            });
        }
    });
    this.get('/logout', function () {
        logout(this);
    });
    this.get('/add-movie', function () {
        if (!getCurrUserInfo()) {
            this.redirect('#/home');
        } else {
            this.loadPartials({
                header: './src/templates/header.hbs'
            }).then(function () {
                this.partial('./src/templates/addMovie.hbs', getCurrUserInfo());
            });
        }
    });
    this.get('/details/:id', async function () {
        if (getCurrUserInfo()) {
            const { id } = this.params;
            let templateData = getCurrUserInfo();
            Object.assign(templateData, await getById(id));
            if (templateData.email === templateData.creator) {
                templateData['isCreator'] = true;
            }
            if (templateData.likes && templateData.likes.includes(templateData.email)) {
                templateData['alreadyLiked'] = true;
            }

            this.partials = {
                header: await this.load('./src/templates/header.hbs'),
            }
            this.partial('./src/templates/details.hbs', templateData);
        } else {
            this.redirect('#/home');
        }
    });

    // POST
    this.post('/login', function () {
        const { email, password } = this.params;
        if (email !== '' && password !== '') {
            login(email, password)
                .then(res => {
                    this.redirect('#/home');
                })
                .catch(err => console.log(err.message));
        }
    });
    this.post('/register', function () {
        const { email, password, repeatPassword } = this.params;
        if ((email !== '' && password !== '' && repeatPassword !== '') &&
            password.length >= 6 && password === repeatPassword) {
            register(email, password)
                .then(res => {
                    console.log(res);
                    this.redirect('#/home');
                })
                .catch(err => console.log(err.message));
        }
    });
    this.post('/add-movie', function () {
        if (!Object.values(this.params).includes('')) {
            let newMovie = Object.assign({}, this.params);
            addMovie(newMovie)
                .then(() => {
                    this.redirect('#/home');
                })
                .catch(err => console.log(err));
        }
    });
});

app.run('#/home');