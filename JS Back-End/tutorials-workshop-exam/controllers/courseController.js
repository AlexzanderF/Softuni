const router = require('express').Router();
const courseService = require('../services/courseService');
const isAuthenticated = require('../middlewares/isAuthenticated');

router.use(isAuthenticated);

router.get('/create', (req, res) => {
    res.render('create-course');
});

router.post('/create', async (req, res) => {
    try {
        await courseService.create({ ...req.body, creatorId: req.user.id })
        res.redirect('/');
    } catch (err) {
        console.log(err);
        res.render('create-course', { message: err.message, data: req.body });
    }
});

router.get('/details/:id', async (req, res) => {
    try {
        const userId = req.user.id;
        const course = await courseService.getById(req.params.id);
        if (course.creatorId.toString() === userId) {
            res.render('details', { ...course, isCreator: true });
        } else {
            res.render('details', {
                ...course,
                enrolled: course.usersEnrolled.some(x => x.equals(userId))
            });
        }
    } catch (err) {
        console.error(err);
        res.render('details', { message: err.message });
    }
});

router.get('/edit/:id', async (req, res) => {
    try {
        const course = await courseService.getById(req.params.id);
        res.render('edit-course', { ...course });
    } catch (err) {
        console.error(err);
    }
});

router.post('/edit/:id', async (req, res) => {
    try {
        const editedCourse = req.body;
        const { id: courseId } = req.params;
        await courseService.editCourse(courseId, editedCourse);
        res.redirect('/course/details/' + courseId);
    } catch (err) {
        console.log(err);
        res.render('edit-course', { message: err.message, data: { ...req.body, _id: req.params.id } });
    }
});

router.get('/enroll/:id', async (req, res) => {
    try {
        const { id: courseId } = req.params;
        await courseService.addUserToCourse(req.user.id, courseId);
        res.redirect('/course/details/' + courseId);
    } catch (err) {
        console.log(err);
    }
});

router.get('/delete/:id', async (req, res) => {
    try {
        await courseService.deleteById(req.params.id);
        res.redirect('/');
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;