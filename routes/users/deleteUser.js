const UserModel = require('../../models/User');

module.exports = async (req, res) => {
  const params = req.params || {};

  try {
    const deletedUser = await UserModel.findOne({ _id: params.id }, (error, user) => {
      user.remove();
    });

    res.json(deletedUser)
  } catch (err) {
    throw err;
  }
};
