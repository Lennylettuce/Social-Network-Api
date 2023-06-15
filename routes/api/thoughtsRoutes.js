const router = require("express").Router();

// require thoughtController from controllers
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require("../../controllers/thoughtController");

// GET and POST for thoughts main route to see all and create one @ /api/thoughts
router.route("/").get(getAllThoughts).post(createThought);

// GET, PUT and DELETE for thoughts id
router.route("/:id").get(getThoughtById).put(updateThought).delete(deleteThought);

// DELETE and POST for thoughtsId to search/delete reactions to thoughts
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);
router.route("/:thoughtId/reactions").post(addReaction);

module.exports = router;