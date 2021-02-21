const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const trim = require('validator/lib/trim');
const { SECRET } = require('../config/config');

function validateInput(username, password, amount) {
    if (!/^\w+$/g.test(username)) {
        throw new Error('Username should consist only English letters and digits');
    }
    if (username.length < 4) {
        throw new Error('Username should be at least 4 characters long');
    }
    if (password.length < 4) {
        throw new Error('Password should be at least 4 characters long');
    }
    if (amount < 0) {
        throw new Error('Amount should be a positive number or 0');
    }
    return;
}

module.exports = {
    register: async ({ username, password, repeatPassword, amount }) => {
        console.log(amount);
        try {
            username = trim(username);
            if (!amount) {
                amount = 0;
            } else {
                if (!/[0-9]/g.test(amount[0])) {
                    amount = amount.slice(1);
                }
            }
            if (!username || !password || !repeatPassword) {
                throw new Error('Fill all input fields');
            }
            if (password !== repeatPassword) {
                throw new Error('Passwords doesn\'t match');
            }
            validateInput(username, password, amount);

            // password hashing is done by mongoose .pre(save) hook
            return new User({ username, password, amount }).save();
        } catch (error) {
            throw error;
        }
    },

    login: async ({ username, password }) => {
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
    },

    getUserById(id) {
        return User.findOne({ _id: id }).populate('expenses').lean();
    }
};