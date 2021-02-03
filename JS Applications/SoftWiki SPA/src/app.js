import * as auth from './auth.js';
import * as data from './data.js';

const app = Sammy('#root', function () {
    this.use('Handlebars', 'hbs');

    // GET
    this.get('/home', async function () {
        let templateData = auth.getCurrUserInfo();
        if (templateData) {
            // loadData
        }
        this.partials = {
            header: await this.load('./src/templates/header.hbs'),
        };
        await this.partial('./src/templates/home.hbs', templateData);
    });
    this.get('/', function () {
        this.redirect('#/home');
    });
    this.get('/login', function () {
        if (auth.getCurrUserInfo()) {
            this.redirect('#/home');
        } else {
            this.loadPartials({
                header: './src/templates/header.hbs'
            }).then(function () {
                this.partial('./src/templates/login.hbs', auth.getCurrUserInfo());
            });
        }
    });
    this.get('/register', function () {
        if (auth.getCurrUserInfo()) {
            this.redirect('#/home');
        } else {
            this.loadPartials({
                header: './src/templates/header.hbs'
            }).then(function () {
                this.partial('./src/templates/register.hbs', auth.getCurrUserInfo());
            });
        }
    });
    this.get('/logout', function () {
        auth.logout(this);
    });

    // POST
    this.post('/register', function () {
        const { email, password } = this.params;
        const repeatPassword = this.params['rep-pass'];
        console.log(rep - pass);
        if ((email !== '' && password !== '' && repeatPassword !== '') &&
            password.length >= 6 && password === repeatPassword) {

            register(email, password).then(() => {
                this.redirect('#/login');
            });
        }
    });
});

app.run('#/home');