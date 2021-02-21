const router = require('express').Router();
const playService = require('../services/playService');
const isAuthenticated = require('../middlewares/isAuthenticated');

router.get('/details/:id', isAuthenticated, async (req, res, next) => {
    const userId = req.user.id;
    try {
        const currPlay = await playService.getById(req.params.id);
        let liked = false;
        let isCreator = false;
        if (currPlay.usersLiked.some(u => u.equals(userId))) {
            liked = true;
        }
        if (currPlay.createdBy.equals(userId)) {
            isCreator = true;
        }
        res.render('theater pages/theater-details', { ...currPlay, liked, isCreator });
    } catch (error) {
        console.error(error);
        next();
    }
});

router.get('/create', isAuthenticated, (req, res) => {
    res.render('theater pages/create-theater');
});

router.post('/create', isAuthenticated, async (req, res) => {
    try {
        await playService.create(req.body, req.user.id);
        res.redirect('/');
    } catch (e) {
        res.render('theater pages/create-theater', { error: e.message, ...req.body });
    }
});

router.get('/like/:id', isAuthenticated, async (req, res, next) => {
    const playId = req.params.id;
    try {
        await playService.likePlay(playId, req.user.id);
        res.redirect('back');
    } catch (error) {
        console.error(error);
        next();
    }
});

router.get('/edit/:id', isAuthenticated, async (req, res, next) => {
    try {
        const currPlay = await playService.getById(req.params.id);
        res.render('theater pages/edit-theater', { ...currPlay });
    } catch (error) {
        console.error(error);
        next();
    }
});

router.post('/edit/:id', isAuthenticated, async (req, res, next) => {
    const playId = req.params.id;
    try {
        await playService.update(playId, req.body);
        res.redirect('/details/' + playId);
    } catch (error) {
        console.error(error);
        next(error);
    }
});
router.get('/delete/:id', isAuthenticated, async (req, res, next) => {
    const playId = req.params.id;
    try {
        await playService.delete(playId);
        res.redirect('/');
    } catch (error) {
        console.error(error);
        next(error);
    }
});

module.exports = router;