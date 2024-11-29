const User = require('../models/user');

exports.getProtectedData = async (req, res) => {
  try {
    const user = await User.findById(req.userId).populate('roles');
    res.json({ msg: 'Protected Data', user });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
