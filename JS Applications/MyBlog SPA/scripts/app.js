import { getCurrUserInfo, login, register, logout } from './util/auth.js';
import { createPost, deletePost, getAllPosts, getOnePost, updatePost } from './util/data.js';

const app = Sammy('#root', function () {
    this.use('Handlebars', 'hbs');

    // GET
    this.get('/', function () {
        this.redirect('#/home');
    });
    this.get('/home', async function () {
        let templateData = getCurrUserInfo();
        if (getCurrUserInfo()) {
            templateData.posts = await getAllPosts();
        }

        this.partials = {
            navbar: await this.load('./scripts/templates/navbar.hbs'),
            post: await this.load('./scripts/templates/post.hbs')
        };
        await this.partial('./scripts/templates/home.hbs', templateData);

    });
    this.get('/logout', function () {
        logout(this);
    });
    this.get('/login', function () {
        if (getCurrUserInfo()) {
            this.redirect('#/home');
        } else {
            this.loadPartials({
                navbar: './scripts/templates/navbar.hbs'
            }).then(function () {
                this.partial('./scripts/templates/login.hbs', getCurrUserInfo());
            });
        }
    });
    this.get('/register', function () {
        if (getCurrUserInfo()) {
            this.redirect('#/home');
        } else {
            this.loadPartials({
                navbar: './scripts/templates/navbar.hbs'
            }).then(function () {
                this.partial('./scripts/templates/register.hbs', getCurrUserInfo());
            });
        }
    });
    this.get('/edit/:id', async function () {
        const { id } = this.params;
        let templateData = getCurrUserInfo();
        templateData.posts = await getAllPosts();
        templateData.currentPost = await getOnePost(this.params.id);

        this.partials = {
            navbar: await this.load('./scripts/templates/navbar.hbs'),
            post: await this.load('./scripts/templates/post.hbs')
        };
        await this.partial('./scripts/templates/edit.hbs', templateData);
    });
    this.get('/details/:id', async function () {
        console.log(this.params);
        if (getCurrUserInfo()) {
            const { id } = this.params;
            let templateData = await getOnePost(id);
            Object.assign(templateData, getCurrUserInfo());
            this.partials = {
                navbar: await this.load('./scripts/templates/navbar.hbs'),
            };
            await this.partial('./scripts/templates/details.hbs', templateData);
        } else {
            this.redirect('#/home');
        }
    });
    this.get('/delete/:id', async function () {
        try {
            await deletePost(this.params.id);
            this.redirect('#/home');
        } catch (error) {
            console.error(error);
        }
    });
    // POST
    this.post('/login', function () {
        const { email, password } = this.params;
        if (email !== '' && password !== '') {
            login(email, password).then(() => {
                this.redirect('#/home');
            });
        }
    });
    this.post('/register', function () {
        const { email, password, repeatPassword } = this.params;
        if ((email !== '' && password !== '' && repeatPassword !== '') &&
            password.length >= 6 && password === repeatPassword) {

            register(email, password).then(() => {
                this.redirect('#/login');
            });
        }
    });
    this.post('/create-post', function () {
        if (!Object.values(this.params).includes('')) {
            createPost(this.params).then(() => {
                this.redirect('#/home');
            })
        }
    });
    this.post('/edit-post', function () {
        const id = location.hash.split('/')[2];
        updatePost(id, this.params).then(() => {
            this.redirect('#/home');
        });
    });

});

app.run('/#/home');