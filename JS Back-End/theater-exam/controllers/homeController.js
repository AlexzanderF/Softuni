const router = require('express').Router();
const playService = require('../services/playService');

router.get('/', async (req, res, next) => {
    try {
        if (req.user) {
            if (req.query.sorted === 'date') {
                const plays = await playService.getSortedByDate();
                res.render('user-home', { plays });
            } else if (req.query.sorted === 'likes') {
                const plays = await playService.getMostLiked(1);
                console.log(plays);
                res.render('user-home', { plays });
            } else {
                const plays = await playService.getSortedByDate();
                res.render('user-home', { plays });
            }
        } else {
            const plays = await playService.getMostLiked(3);
            res.render('guest-home', { plays });
        }
    } catch (error) {
        next(error);
    }
});

module.exports = router;