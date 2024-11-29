const Role = require('../models/role');

module.exports = (roles) => {
  return async (req, res, next) => {
    try {
      const user = await User.findById(req.userId).populate('roles');
      const userRoles = user.roles.map(role => role.name);

      if (roles.some(role => userRoles.includes(role))) {
        return next();
      }
      
      res.status(403).json({ msg: 'Forbidden' });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  };
};
