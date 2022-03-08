const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
  getFriends,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');

router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getSingleUser).delete(deleteUser).post(updateUser);

router.route('/:userId/friends').get(getFriends);

router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;
