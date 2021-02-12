const Course = require('../models/Course');
const User = require('../models/User');
const { isURL } = require('validator');

module.exports = {
    getTopCourses: () => {
        return Course.find({}).sort({ usersEnrolled: -1 }).limit(3).lean();
    },

    getAllSorted: () => {
        return Course.find({}).sort({ createdAt: 'asc' }).lean();
    },

    getByName: (search) => {
        return Course.find({
            title: search ? new RegExp(search, 'gi') : /^.+$/g
        }).lean();
    },

    getById: (id) => {
        return Course.findOne({ _id: id }).lean();
    },

    create: async (data) => {
        try {
            if (!isURL(data.imageUrl)) {
                throw new Error('Invalid image URL');
            }
            if (data.title.length < 4) {
                throw new Error('Title should be at least 4 characters');
            }
            if (data.description.length < 20) {
                throw new Error('Description should be at least 20 characters long');
            }

            let today = new Date();
            let date = today.toLocaleString().replace(',', '');
            return new Course({ ...data, createdAt: date }).save();
        } catch (err) {
            console.error(err);
            throw err;
        }
    },

    addUserToCourse: async (userId, courseId) => {
        return Promise.all([
            Course.updateOne({ _id: courseId }, { $push: { 'usersEnrolled': userId } }),
            User.updateOne({ _id: userId }, { $push: { 'enrolledCourses': courseId } })
        ]);
    },

    deleteById: async (id) => {
        return Course.deleteOne({ _id: id });
    },

    editCourse: (id, data) => {
        try {
            if (!isURL(data.imageUrl)) {
                throw new Error('Invalid image URL');
            }
            if (data.title.length < 4) {
                throw new Error('Title should be at least 4 characters');
            }
            if (data.description.length < 20) {
                throw new Error('Description should be at least 20 characters long');
            }

            return Course.updateOne({ _id: id }, data);
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
}