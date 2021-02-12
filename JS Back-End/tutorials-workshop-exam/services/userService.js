const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { SECRET } = require('../config/config');

module.exports = {
    register: async ({ username, password, rePassword }) => {
        try {
            if (username.length < 5 || !/^\w+$/g.test(username)) {
                throw new Error('Username should be at least 5 characters long and should consist only english letters and digits');
            }
            if (password.length < 5 || !/^\w+$/g.test(password)) {
                throw new Error('Password should be at least 5 characters long and should consist only english letters and digits');
            }
            if (password !== rePassword) {
                throw new Error('Passwords doesn\'t match');
            }

            return User.create({ username, password });
        } catch (error) {
            console.log(error);
            throw error;
        }
    },

    login: async ({ username, password }) => {
        try {
            if (username.length < 5 || !/^\w+$/g.test(username)) {
                throw new Error('Username should be at least 5 characters long and should consist only english letters and digits');
            }
            if (password.length < 5 || !/^\w+$/g.test(password)) {
                throw new Error('Password should be at least 5 characters long and should consist only english letters and digits');
            }

            const user = (await User.find({ username }))[0];
            if (!user) throw new Error('Invalid username');

            const match = await bcrypt.compare(password, user.password);
            if (!match) throw new Error('Invalid password');

            const token = jwt.sign({ id: user._id, username }, SECRET);

            return token;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}