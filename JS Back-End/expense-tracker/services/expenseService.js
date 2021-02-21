const Expense = require('../models/Expense');
const User = require('../models/User');
const isURL = require('validator/lib/isURL');

module.exports = {
    getUserExpenses(userId) {
        return Expense.find({ user: userId }).lean();
    },

    getById(id) {
        return Expense.findOne({ _id: id }).lean();
    },

    async create({ merchant, total, category, description, checkbox }, creatorId) {
        try {
            if (!merchant || !description || !total) {
                throw new Error('Fill all input fields');
            }
            if (!category) {
                throw new Error('Category should one from the given options');
            }
            if (merchant.length < 4) {
                throw new Error('Merchant should be at least 4 characters long');
            }
            if (total <= 0) {
                throw new Error('Total should be a positive number');
            }

            const newExpense = await new Expense({
                merchant,
                total,
                category,
                description,
                report: checkbox === 'on' ? true : false,
                user: creatorId
            }).save();

            await User.updateOne({ _id: creatorId }, { $push: { expenses: newExpense._id } });

            return newExpense;
        } catch (error) {
            throw error;
        }
    },

    refilUserMoney(userId, { refillAmount }) {
        return User.updateOne({ _id: userId }, { $inc: { amount: refillAmount } });
    },

    async deleteExpense(expenseId, userId) {
        try {
            await Expense.deleteOne({ _id: expenseId });
            await User.updateOne({ _id: userId }, { $pull: { expenses: expenseId } });
            return;
        } catch (error) {
            throw error;
        }
    }
}