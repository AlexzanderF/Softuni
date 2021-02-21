const Play = require('../models/Play');
const User = require('../models/User');

module.exports = {
    getSortedByDate() {
        try {
            return Play.find({ isPublic: true }).sort({ createdAt: -1 }).lean();
        } catch (error) {
            throw error;
        }
    },
    getSortedByLikes() {
        try {
            return Play.find({ isPublic: true }).sort({ usersLiked: -1 }).limit(1).lean();
        } catch (error) {
            throw error;
        }
    },
    async getMostLiked(num) {
        try {
            let plays = await Play.find({ isPublic: true }).lean();
            plays = plays.sort((a, b) => b.usersLiked.length - a.usersLiked.length).slice(0, num);
            return plays;
        } catch (error) {
            throw error;
        }
    },

    getById(id) {
        return Play.findOne({ _id: id }).lean();
    },

    async create(data, creatorId) {
        try {
            if (!data.title || !data.description || !data.imageUrl) {
                throw new Error('Fill all input fields');
            }

            const date = new Date().toLocaleString().replace(',', '');
            return new Play({
                ...data,
                createdAt: date,
                isPublic: data.checkbox === 'on' ? true : false,
                createdBy: creatorId
            }).save();
        } catch (error) {
            throw error;
        }
    },

    likePlay(playId, userId) {
        try {
            return Promise.all([
                Play.updateOne({ _id: playId }, { $push: { usersLiked: userId } }),
                User.updateOne({ _id: userId }, { $push: { likedPlays: playId } })
            ]);
        } catch (error) {
            throw error;
        }
    },

    update(id, { title, description, imageUrl, checkbox }) {
        try {
            if (!title || !description || !imageUrl) {
                throw new Error('Fill all input fields');
            }

            return Play.updateOne({ _id: id },
                {
                    title,
                    description,
                    imageUrl,
                    isPublic: checkbox === 'on' ? true : false
                });
        } catch (error) {
            throw error;
        }
    },

    delete(id) {
        return Play.deleteOne({ _id: id });
    }
};