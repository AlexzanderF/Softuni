const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const saltRounds = 10;

const userSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    enrolledCourses: [{ type: Schema.Types.ObjectId, ref: 'Course' }]
});

userSchema.pre('save', async function (next) {
    if (!this.isModified('password') || !this.isNew) return next();
    try {
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(this.password, salt);

        this.password = hashedPassword;
        next();
    } catch (error) {
        next(error);
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;