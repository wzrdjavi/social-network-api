const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    newThought, 
    updateThought,
    deleteThought,
    newReaction,
    deleteReaction
} = require('../../controllers/thoughtController');

// GET and POST thought
router.route('/').get(getThought).post(createThought);

// GET,PUT,DELETE by single thought
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

// POST and DELETE by reaction
router.route('/:thoughtId/reactions').post(addReaction).delete(removeReaction);

module.exports = router;