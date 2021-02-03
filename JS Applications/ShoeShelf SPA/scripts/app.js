import { login, getCurrUserInfo, register, logout } from './util/authentication.js';
import { loadShoes, createNewShoe, getShoeDetails, buyShoe, deleteShoe, editShoe, sortShoes } from './util/dataServices.js';

const app = Sammy('#root', function () {
    this.use('Handlebars', 'hbs');

    // GET
    this.get('/home', async function () {
        let templateData = getCurrUserInfo();
        if (templateData) {
            let data = await loadShoes();
            console.log(data);
            data.sort((a, b) => sortShoes(a, b));
            console.log(data);
            templateData['shoes'] = data;
        }
        this.loadPartials({
            header: './scripts/templates/header.hbs'
        }).then(function () {
            this.partial('./scripts/templates/home.hbs', templateData);
        });
    });

    this.get('/register', function () {
        if (getCurrUserInfo()) {
            this.redirect('#/home');
        } else {
            this.loadPartials({
                header: './scripts/templates/header.hbs'
            }).then(function () {
                this.partial('./scripts/templates/register.hbs');
            });
        }
    });

    this.get('/login', function () {
        if (getCurrUserInfo()) {
            this.redirect('#/home');
        } else {
            this.loadPartials({
                header: './scripts/templates/header.hbs'
            }).then(function () {
                this.partial('./scripts/templates/login.hbs');
            });
        }
    });

    this.get('/logout', function () {
        logout();
        this.redirect('#/login');
    });

    this.get('/create', function () {
        if (getCurrUserInfo()) {
            this.loadPartials({
                header: './scripts/templates/header.hbs'
            }).then(function () {
                this.partial('./scripts/templates/create.hbs', getCurrUserInfo());
            });
        } else {
            this.redirect('#/home');
        }
    });

    this.get('/details/:id', async function () {
        if (getCurrUserInfo()) {
            let templateData = getCurrUserInfo();
            const { id } = this.params;
            templateData.id = id;
            let data = await getShoeDetails(id);
            if (templateData.email === data.creator) {
                templateData['isCreator'] = true;
            } else if (data.bought && data.bought.includes(templateData.email)) {
                templateData['alreadyBought'] = true;
            }
            Object.assign(templateData, data);

            this.partials = {
                header: await this.load('./scripts/templates/header.hbs')
            }
            await this.partial('./scripts/templates/details.hbs', templateData);

            if (templateData.isCreator !== true) {
                const buyBtn = document.querySelector('main a');
                if (buyBtn) {
                    buyBtn.addEventListener('click', () => {
                        buyShoe(data, id, templateData.email).then(() => {
                            this.app.refresh();
                        })
                    });
                }
            }
            if (templateData.isCreator) {
                const delBtn = document.querySelectorAll('main a')[1];
                delBtn.addEventListener('click', () => {
                    deleteShoe(id);
                });
            }
        } else {
            this.redirect('#/home');
        }
    });

    this.get('/edit/:id', function () { 
        if (getCurrUserInfo()) {
            this.loadPartials({
                header: './scripts/templates/header.hbs'
            }).then(function () {
                this.partial('./scripts/templates/edit.hbs', getCurrUserInfo());
            });
        } else {
            this.redirect('#/home');
        }
    });

    // POST
    this.post('/login', function () {
        const { email, password } = this.params;
        if (email !== '' && password !== '') {
            login(email, password).then(() => {
                this.redirect('#/home');
            });
        } else {
            console.log('Invalid inputs');
        }
    });

    this.post('/register', function () {
        const { email, password, rePassword } = this.params;
        if ((email !== '' && password !== '' && rePassword !== '') &&
            password.length >= 6 && password === rePassword) {
            register(email, password).then(() => {
                this.redirect('#/home');
            });
        } else {
            console.log('Invalid inputs');
        }
    });

    this.post('/create', function () {
        if (!Object.values(this.params).includes('')) {
            let shoeObj = Object.assign({}, this.params);
            shoeObj['creator'] = getCurrUserInfo().email;
            // shoeObj['bought'] = [];   !!! add to database when the first user buys it
            createNewShoe(shoeObj).then(res => {
                this.redirect('#/home');
            });
        } else {
            console.log('Invalid inputs');
        }
    });

    this.post('/edit', function () {
        const id = location.hash.split('/')[2];
        if (Object.values(this.params).some(x => x !== '')) {
            let shoeObj = {};
            for (let key in { ...this.params }) {
                if (this.params[key] !== '') {
                    shoeObj[key] = this.params[key];
                }
            }
            editShoe(id, shoeObj).then(() => {
                this.redirect(`#/details/${id}`);
            });
        } else {
            console.log('Invalid inputs');
        }
    });
});

app.run('#/home');
