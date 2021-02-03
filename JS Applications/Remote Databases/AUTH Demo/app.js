(function () {
    const switchToLogin = document.querySelectorAll('.message > a')[0];
    const switchToRegister = document.querySelectorAll('.message > a')[1];

    switchToRegister.addEventListener('click', (e) => {
        e.preventDefault();

        document.getElementsByClassName('login-form')[0].style.display = 'none';
        document.getElementsByClassName('register-form')[0].style.display = 'block';
    });
    switchToLogin.addEventListener('click', (e) => {
        e.preventDefault();

        document.getElementsByClassName('login-form')[0].style.display = 'block';
        document.getElementsByClassName('register-form')[0].style.display = 'none';
    });

    const logingField = document.querySelector('.login-field');
    document.querySelector('.register-form > button').addEventListener('click', registerNewUser);
    document.querySelector('.login-form > button').addEventListener('click', signInExsistingUser);
    const logoutBtn = document.getElementById('logout');

    function registerNewUser(e) {
        e.preventDefault();

        const emailInput = document.querySelectorAll('.register-form > input')[0];
        const passwordInput = document.querySelectorAll('.register-form > input')[1];

        if (emailInput.value === '' || passwordInput.value.length < 6) {
            return;
        }

        firebase.auth().createUserWithEmailAndPassword(emailInput.value, passwordInput.value)
            .then(res => {
                logingField.style.display = 'none';
                let h2 = document.createElement('h2');
                h2.textContent = `You are currently logged in as: ${res.user.email}!`;
                document.querySelector('body').appendChild(h2);
                logoutBtn.style.display = 'block';
                logoutBtn.addEventListener('click', (e) => {
                    logout(e, h2);
                });
            })
            .catch(err => {
                console.log(err);
            });

        emailInput.value = '';
        passwordInput.value = '';
    }
    function signInExsistingUser(e) {
        e.preventDefault();

        const emailInput = document.querySelectorAll('.login-form > input')[0];
        const passwordInput = document.querySelectorAll('.login-form > input')[1];

        if (emailInput.value === '' || passwordInput.value.length < 6) {
            return;
        }

        firebase.auth().signInWithEmailAndPassword(emailInput.value, passwordInput.value)
            .then(res => {
                console.log(res);
                logingField.style.display = 'none';
                let h2 = document.createElement('h2');
                h2.textContent = `You are currently logged in as: ${res.user.email}!`;
                document.querySelector('body').appendChild(h2);
                logoutBtn.style.display = 'block';
                logoutBtn.addEventListener('click', (e) => {
                    logout(e, h2);
                });
            })
            .catch(err => {
                console.log(err);
            })

        emailInput.value = '';
        passwordInput.value = '';
    }

    function logout(e, h2) {

        firebase.auth().signOut()
            .then(res => {
                console.log(res);

                logingField.style.display = 'block';
                e.target.style.display = 'none';
                h2.remove()
            })
            .catch(err => console.log(err));
    }
})();