const UserModel = require('../../models/User');

module.exports = async (req, res) => {
  const params = req.params || {};

  try {
    const dbUser = await UserModel.findOne({ _id: params.id });

    if (!dbUser) {
      return res.status(404).json({ errorMessage: 'User not found' });
    }

    res.json(dbUser);
  } catch (err) {
    throw err;
  }
};
