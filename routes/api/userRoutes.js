const router = require('express').Router();

// require userController from controllers
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend,
} = require('../../controllers/userController');

// GET and POST for /api/users
router.route('/').get(getAllUsers).post(createUser);

// GET, PUT and DELETE for /api/users/:id
router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);

// POST and DELETE for /api/friend/:friendId
router.route('/:id/friend/friendId').post(addFriend).delete(removeFriend);

module.exports = router;