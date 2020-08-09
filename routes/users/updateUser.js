const UserModel = require('../../models/User');

module.exports = async (req, res) => {
  const body = req.body || {};
  const params = req.params || {};

  try {
    const filter = { _id: params.id };

    let updatedUser = await UserModel.findOneAndUpdate(filter, body, {
      new: true
    });

    res.json(updatedUser)
  } catch (err) {
    throw err;
  }
};
