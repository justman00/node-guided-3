const users = require('../users/users-model');

const findUserMiddleware = () => (req, res, next) => {
  users
    .findById(req.params.id)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ msg: 'No user found' });
      }
      // state
      req.user = user;

      next();
    })
    .catch(next);
};

const checkUserMiddleware = () => (req, res, next) => {
  if (!req.body.name || !req.body.email) {
    return res.status(400).json({
      message: 'Missing user name or email',
    });
  } else {
      return next();
  }
};

module.exports = {
  findUserMiddleware,
  checkUserMiddleware
};
