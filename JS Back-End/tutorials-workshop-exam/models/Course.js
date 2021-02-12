const mongoose = require('mongoose');
const { Schema } = mongoose;

const courseSchema = new Schema({
    title: { type: String, required: true, unique: false },
    description: { type: String, required: true, maxlength: 50 },
    imageUrl: { type: String, required: true },
    duration: { type: String, required: true },
    createdAt: { type: String, required: true },
    creatorId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    usersEnrolled: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;