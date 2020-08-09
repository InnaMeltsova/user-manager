const UserModel = require('../../models/User');

module.exports = async (req, res) => {
  const body = req.body || {};

  try {
    if ( !body.email || !body.password) {
      return res.json({ message: 'required params not provided!'})
    }

    const newUser = new UserModel({ email: body.email, password: body.password });

    newUser.save((err) => {
      if (err) console.log(err);
    });

    return res.json(newUser);
  } catch (err) {
    throw err;
  }
};
