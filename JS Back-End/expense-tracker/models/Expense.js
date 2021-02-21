const mongoose = require('mongoose');
const { Schema } = mongoose;

const expenseSchema = new Schema({
    merchant: { type: String, required: true },
    total: { type: Number, required: true },
    category: { type: String, required: [true, 'Category should be one from the given options'] },
    description: {
        type: String,
        minlength: [3, 'Description should be minimum 3 characters long'],
        maxlength: [30, 'Description should be maximum 30 characters long']
    },
    report: { type: Boolean, required: true, default: false },
    user: { type: Schema.Types.ObjectId, ref: 'User' }
    // user - creator
});

expenseSchema.post('save', function (err, doc, next) {
    if (err.name === 'ValidationError'
        && ['minlength', 'maxlength'].includes(err.errors.description.kind)) {
        next(new Error(err.errors.category.message));
    } else {
        next();
    }
});

const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;