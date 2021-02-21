const router = require('express').Router();
const isAuthenticated = require('../middlewares/isAuthenticated');
const expenseService = require('../services/expenseService');
const userService = require('../services/userService');

router.get('/details/:id', isAuthenticated, async (req, res, next) => {
    try {
    } catch (error) {
        next(error);
    }
});

router.get('/add', isAuthenticated, (req, res, next) => {
    res.render('expenses/new-expense');
});

router.post('/add', isAuthenticated, async (req, res, next) => {
    try {
        await expenseService.create(req.body, req.user.id);
        res.redirect('/');
    } catch (e) {
        res.render('expenses/new-expense', { error: e.message, ...req.body });
    }
});

router.get('/report/:id', isAuthenticated, async (req, res, next) => {
    try {
        const expenseReport = await expenseService.getById(req.params.id);
        res.render('expenses/report', { ...expenseReport, id: expenseReport._id });
    } catch (error) {
        next(error);
    }
});

router.get('/stop-tracking/:id', isAuthenticated, async (req, res, next) => {
    try {
        await expenseService.deleteExpense(req.params.id, req.user.id);
        res.redirect('/');
    } catch (error) {
        next(error);
    }
});

router.post('/refil', isAuthenticated, async (req, res, next) => {
    try {
        await expenseService.refilUserMoney(req.user.id, req.body);
        res.redirect('/');
    } catch (error) {
        next(error);
    }
});

router.get('/account/:id', isAuthenticated, async (req, res, next) => {
    const userId = req.params.id;
    try {
        const currUser = await userService.getUserById(userId);
        let totalExpensesAmount = 0;
        currUser.expenses.forEach((exp) => totalExpensesAmount += exp.total);
        console.log(totalExpensesAmount);
        res.render('user/account-info', {
            merchantsCount: currUser.expenses.length,
            availableAmount: currUser.amount,
            totalExpensesAmount
        });
    } catch (error) {
        next(error);
    }
});

module.exports = router;