import { getById, getAll, update, add, deleteById, validateParams } from './util/data.js';
import { login, logout, register, getCurrUserInfo } from './util/auth.js';
import { handleError, informationalMsg } from './util/notifications.js';

const app = Sammy('#container', function () {
    this.use('Handlebars', 'hbs');

    // GET
    this.get('/', function () {
        this.redirect('#/home');
    });
    this.get('/home', async function () {
        let templateData = getCurrUserInfo();

        if (templateData) { // if the user is logged in load destinations
            templateData.destinations = await getAll();
        }

        this.partials = {
            header: await this.load('./src/templates/header.hbs'),
            footer: await this.load('./src/templates/footer.hbs')
        }
        this.partial('./src/templates/home.hbs', templateData);
    });
    this.get('/login', function () {
        if (getCurrUserInfo()) {
            this.redirect('#/home');
        } else {
            this.loadPartials({
                header: './src/templates/header.hbs',
                footer: './src/templates/footer.hbs'
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
                header: './src/templates/header.hbs',
                footer: './src/templates/footer.hbs'
            }).then(function () {
                this.partial('./src/templates/register.hbs', getCurrUserInfo());
            });
        }
    });
    this.get('/logout', function () {
        logout(this).then(() => {
            informationalMsg('Logout successful.')
        });
    });
    this.get('/add', function () {
        if (getCurrUserInfo()) {
            this.loadPartials({
                header: './src/templates/header.hbs',
                footer: './src/templates/footer.hbs'
            }).then(function () {
                this.partial('./src/templates/create.hbs', getCurrUserInfo());
            });
        } else {
            this.redirect('#/home');
        }
    });
    this.get('/details/:id', async function () {
        if (getCurrUserInfo()) {
            const { id } = this.params;
            let templateData = getCurrUserInfo();
            templateData.id = id;
            Object.assign(templateData, await getById(id));
            if (templateData.creator === getCurrUserInfo().email) {
                templateData['isCreator'] = true;
            }

            this.partials = {
                header: await this.load('./src/templates/header.hbs'),
                footer: await this.load('./src/templates/footer.hbs')
            }
            this.partial('./src/templates/details.hbs', templateData);
        } else {
            this.redirect('#/home');
        }
    });
    this.get('/delete/:id', async function () {
        try {
            await deleteById(this.params.id);
            this.redirect('#/destinations');
            informationalMsg('Destination deleted.');
        } catch (error) {
            console.error(error);
        }
    });
    this.get('/edit/:id', async function () {
        if (getCurrUserInfo()) {
            let templateData = getCurrUserInfo();
            const { id } = this.params;
            Object.assign(templateData, await getById(id));

            this.partials = {
                header: await this.load('./src/templates/header.hbs'),
                footer: await this.load('./src/templates/footer.hbs')
            }
            this.partial('./src/templates/edit.hbs', templateData);
        } else {
            this.redirect('#/home');
        }
    });
    this.get('/destinations', async function () {
        if (getCurrUserInfo()) {
            let templateData = getCurrUserInfo();
            const currUser = templateData.email;
            let ownDestinations = await getAll();
            ownDestinations = ownDestinations.filter(dest => dest.creator === currUser);
            templateData.ownDestinations = ownDestinations;

            this.partials = {
                header: await this.load('./src/templates/header.hbs'),
                footer: await this.load('./src/templates/footer.hbs')
            }
            this.partial('./src/templates/destinations.hbs', templateData);
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
                    informationalMsg('Login successful.').then(() => {
                        this.redirect('#/home');
                    });
                })
                .catch(err => handleError(err.message));
        } else {
            handleError('Incorrect input fields.');
        }
    });
    this.post('/register', function () {
        const { email, password, rePassword } = this.params;
        if ((email !== '' && password !== '' && rePassword !== '') && password === rePassword &&
            /^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/g.test(email)) {
            register(email, password)
                .then(res => {
                    informationalMsg('User registration successful.').then(() => {
                        this.redirect('#/home');
                    });
                })
                .catch(err => handleError(err.message));
        } else {
            handleError('Invalid input fields.');
        }
    });
    this.post('/add', function () {
        if (!Object.values(this.params).includes('') && validateParams(this.params)) {
            let newObj = Object.assign({}, this.params);
            add(newObj)
                .then(() => {
                    this.redirect('#/home');
                    informationalMsg('Successfully added a new destination.')
                })
                .catch(err => handleError(err.message));
        } else {
            handleError('Incorrect input fields.');
        }
    });
    this.post('/edit', function () {
        if (!Object.values(this.params).includes('') && validateParams(this.params)) {
            const id = location.hash.split('/')[2];
            let destObj = Object.assign({}, this.params);
            update(id, destObj)
                .then(() => {
                    this.redirect(`#/details/${id}`);
                })
                .catch(err => handleError(err.message));
        } else {
            handleError('Incorrect input fields.');
        }
    });

});

(() => {
    app.run('#/home');
})();