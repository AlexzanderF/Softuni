const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const trim = require('validator/lib/trim');
const { SECRET } = require('../config/config');

function validateInput(username, password) {
    if (!/^\w+$/g.test(username)) {
        throw new Error('Username should consist only English letters and digits');
    }
    if (username.length < 3) {
        throw new Error('Username should be at least 3 characters long');
    }
    if (!/^\w+$/g.test(password)) {
        throw new Error('Password should consist only English letters and digits');
    }
    if (password.length < 3) {
        throw new Error('Password should be at least 3 characters long');
    }

    return;
}

module.exports = {
    async register({ username, password, repeatPassword }) {
        try {
            username = trim(username);
            if (!username || !password || !repeatPassword) {
                throw new Error('Fill all input fields');
            }
            if (password !== repeatPassword) {
                throw new Error('Passwords doesn\'t match');
            }
            validateInput(username, password);

            // password hashing is done by mongoose .pre(save) hook
            return new User({ username, password }).save();
        } catch (error) {
            throw error;
        }
    },

    async login({ username, password }) {
        try {
            username = trim(username);
            if (!username || !password) {
                throw new Error('Fill all input fields');
            }
            validateInput(username, password);

            const user = await User.findOne({ username }).lean();
            if (!user) throw new Error('Invalid username');

            const match = await bcrypt.compare(password, user.password);
            if (!match) throw new Error('Invalid password');

            const token = jwt.sign({ id: user._id, username: user.username }, SECRET);

            return token;
        } catch (error) {
            throw error;
        }
    }
};