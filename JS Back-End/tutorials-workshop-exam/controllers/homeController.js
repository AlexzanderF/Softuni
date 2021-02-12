const router = require('express').Router();
const courseService = require('../services/courseService');

router.get('/', async (req, res) => {
    try {
        if (req.user) {
            if (req.query.search) {
                const courses = await courseService.getByName(req.query.search);
                res.render('user-home', { courses })
            } else {
                const courses = await courseService.getAllSorted();
                res.render('user-home', { courses })
            }
        } else {
            const courses = await courseService.getTopCourses();
            res.render('guest-home', { courses });
        }
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;