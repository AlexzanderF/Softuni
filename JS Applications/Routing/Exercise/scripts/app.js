import createTeam from './functions/createTeam.js';
import deleteTeam from "./functions/deleteTeam.js";
import updateTeam from "./functions/updateTeam.js";
import loadTeams from './functions/loadTeams.js';
import getTeamDetails from './functions/getTeamDetails.js';
import getCurrentUserInfo from './functions/getCurrentUserInfo.js';
import updateLocalStorage from "./functions/updateLocalStorage.js";

const infoBox = document.getElementById('infoBox');
const errorBox = document.getElementById('errorBox');

const router = Sammy('#main', function () {
    this.use('Handlebars', 'hbs');
    // this == Sammy.Application

    // GET
    this.get('#/home', function () {
        // this == Sammy.EventContext
        getCurrentUserInfo.call(this);
        this.loadPartials({
            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs'
        }).then(function () {
            // this == Sammy.RenderContext
            this.partial('./templates/home/home.hbs');
        });
    });

    this.get('#/about', function () {
        getCurrentUserInfo.call(this);
        this.loadPartials({
            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs'
        }).then(function () {
            this.partial('./templates/about/about.hbs');
        });
    });

    this.get('#/login', function () {
        this.loadPartials({
            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs',
            loginForm: './templates/login/loginForm.hbs'
        }).then(function () {
            this.partial('./templates/login/loginPage.hbs');
        });
    });

    this.get('#/register', function () {
        this.loadPartials({
            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs',
            registerForm: './templates/register/registerForm.hbs'
        }).then(function () {
            this.partial('./templates/register/registerPage.hbs');
        });
    });

    this.get('#/create', function () {
        getCurrentUserInfo.call(this);
        this.loadPartials({
            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs',
            createForm: './templates/create/createForm.hbs'
        }).then(function () {
            this.partial('./templates/create/createPage.hbs');
        });
    });

    this.get('#/catalog', async function () {
        getCurrentUserInfo.call(this);

        this.hasNoTeam = true;
        this.teams = (await loadTeams()).map(([teamId, values]) => {   // teamId i= key, values = teamObj
            // checks if a team's creator is the loggedIn user
            if (values.creator === this.email || values.members.includes(this.email)) {
                updateLocalStorage('hasTeam', true);
                updateLocalStorage('currentUserTeam', teamId);
                this.hasNoTeam = false;
            }
            return { teamId, ...values };
        });

        this.loadPartials({
            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs',
            team: './templates/catalog/team.hbs'
        }).then(function () {
            this.partial('./templates/catalog/teamCatalog.hbs');
        });
    });

    this.get('#/catalog/:id', async function () {
        getCurrentUserInfo.call(this);

        const teamId = this.params.id;
        let teamDetailsObj = await getTeamDetails(teamId);
        teamDetailsObj.teamId = teamId;

        if (teamDetailsObj.creator === this.email) {
            this.isAuthor = true;
            this.isOnTeam = true;
        } else if (teamDetailsObj.members.includes(this.email)) {
            this.isOnTeam = true;
        }

        this.loadPartials({
            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs',
            teamControls: './templates/catalog/teamControls.hbs'
        }).then(function () {
            this.partial('./templates/catalog/details.hbs', teamDetailsObj);
        });
    });

    this.get('#/edit/:id', function () {
        getCurrentUserInfo.call(this);
        this.teamId = this.params.id;
        this.loadPartials({
            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs',
            editForm: './templates/edit/editForm.hbs'
        }).then(function () {
            this.partial('./templates/edit/editPage.hbs');
        });
    });

    this.get('#/logout', function () {
        auth.signOut()
            .then(res => {
                localStorage.removeItem('userInfo');
                this.redirect('#/home');
            })
            .catch(err => console.log(err));
    });

    // POST
    this.post('#/register', function () {
        let { email, password, repeatPassword } = this.params;
        if ([email, password, repeatPassword].includes('') || password !== repeatPassword) {
            return;
        }
        auth.createUserWithEmailAndPassword(email, password)
            .then(res => {
                const { uid, email } = res.user;
                database.ref('users/' + uid).set({
                    email,
                });
                localStorage.setItem('userInfo', JSON.stringify({ uid, email, hasTeam: false, currentUserTeam: '' }));
                this.redirect('#/home');
            })
            .catch(err => console.log(err));
    });

    this.post('#/login', function () {
        let { email, password } = this.params;
        if (email === '' || password === '') {
            return;
        }
        auth.signInWithEmailAndPassword(email, password)
            .then(res => {
                const { uid, email } = res.user;
                localStorage.setItem('userInfo', JSON.stringify({ uid, email, hasTeam: false, currentUserTeam: '' }));
                this.redirect('#/home');
            })
            .catch(err => console.log(err));
    });

    this.post('#/create', function () {
        const { name, comment } = this.params;
        if (name === '' || comment === '') {
            return;
        }
        createTeam(name, comment).then(() => {
            // updateLocalStorage('hasTeam', true);
            this.redirect('#/catalog');
        }).catch(err => console.log(err));
    });

    this.post('#/edit/:id', function () {
        let { name: newName, comment: newComment } = this.params;
        if (newName !== '' || newComment !== '') {
            const { currentUserTeam: teamId } = JSON.parse(localStorage.getItem('userInfo'));

            getTeamDetails(teamId)
                .then(currTeamObj => {
                    if (newName !== '') {
                        currTeamObj.name = newName;
                    }
                    if (newComment !== '') {
                        currTeamObj.comment = newComment;
                    }

                    updateTeam(teamId, currTeamObj)
                        .then((res) => {
                            console.log(res);
                            this.redirect('#/catalog');
                        })
                        .catch(err => console.log(err));
                })
                .catch(err => console.log(err));

        } else {
            // handle notification
        }
    });

    // UPDATE team data 
    this.get('#/join/:id', async function () {
        // updates the selected team members list and add the current user as a member(joins the team)
        const { hasTeam } = JSON.parse(localStorage.getItem('userInfo'));
        if (!hasTeam) {
            const { email } = JSON.parse(localStorage.getItem('userInfo'));
            const teamId = this.params.id;
            let currTeamObj = await getTeamDetails(teamId);
            currTeamObj.members.push(email);

            updateTeam(teamId, currTeamObj)
                .then(() => {
                    updateLocalStorage('hasTeam', true);
                    updateLocalStorage('currentUserTeam', teamId);
                    this.redirect('#/catalog');
                })
                .catch(err => console.log(err));
        } else {
            // handle notification
            window.alert('You already have a team!');
            this.redirect('#/catalog');
        }

    });

    this.get('#/leave', async function () {
        const { email, currentUserTeam: teamId } = JSON.parse(localStorage.getItem('userInfo'));

        let currTeamObj = await getTeamDetails(teamId);

        if (currTeamObj.creator === email) {
            deleteTeam(teamId);
            this.redirect('#/catalog');
        } else {
            currTeamObj.members = currTeamObj.members.filter(m => m !== email);
            if (currTeamObj.members.length === 0) {
                deleteTeam(teamId);
                this.redirect('#/catalog');
            } else {
                updateTeam(teamId, currTeamObj)
                    .then(() => {
                        updateLocalStorage('hasTeam', false);
                        updateLocalStorage('currentUserTeam', '');
                        this.redirect('#/catalog');
                    })
                    .catch(err => console.log(err));
            }
        }
    });


});

(() => {
    router.run('#/home');
})();