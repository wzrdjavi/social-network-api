const router = require('express').Router();
const {
    getThought,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction,   
} = require('../../controllers/thought-controller')

// GET and POST thought
router.route('/').get(getThought).post(createThought);

// GET,PUT,DELETE by single thought
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

// POST and DELETE by reaction
router.route('/:thoughtId/reactions').post(addReaction).delete(removeReaction);

module.exports = router;