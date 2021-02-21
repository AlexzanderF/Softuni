const router = require('express').Router();
const expenseService = require('../services/expenseService');

router.get('/', async (req, res, next) => {
    try {
        if (req.user) {
            const userId = req.user.id;
            const userExpenses = await expenseService.getUserExpenses(userId);
            res.render('expenses/expenses', { userExpenses });
        } else {
            res.render('home/home');
        }
    } catch (error) {
        next(error);
    }
});

module.exports = router;