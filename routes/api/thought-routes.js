const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    removeThought,
    addReaction,
    removeReaction,
} = require('../../controllers/thought-controller')

router
    .route('/')
    .get(getAllThoughts)

router
     .route('/:userId')
     .post(createThought);

router
    .route('/:thoughtId')
    .get(getThoughtById)
    .put(addThought)
    .delete(removeThought)

router
     .route('/:thoughtId/reactions')
     .post(addReaction)
     .delete(removeReaction)
