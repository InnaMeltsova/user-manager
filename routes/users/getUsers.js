const UserModel = require('../../models/User');

module.exports = async (req, res) => {
  try {
    UserModel.find({}, (err, users) => {
      if (err) console.log(err);

      res.send(users);
    });
  } catch (err) {
    throw err;
  }
};
