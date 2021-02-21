const mongoose = require('mongoose');
const { Schema } = mongoose;

const playSchema = new Schema({
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true, maxlength: 50 },
    imageUrl: { type: String, required: true },
    isPublic: { type: Boolean, default: false },
    createdAt: { type: String, required: true },
    createdBy: { type: Schema.Types.ObjectId, required: true },
    usersLiked: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});

playSchema.post('save', function (err, doc, next) {
    if (err.name === 'MongoError' && err.code === 11000) {
        next(new Error('Title already exists'));
    } else if (err.name === 'ValidationError' && err.errors.description.kind === 'maxlength') {
        next(new Error('Description should be less than 50 chars'));
    } else {
        next();
    }
});

const Play = mongoose.model('Play', playSchema);

module.exports = Play;