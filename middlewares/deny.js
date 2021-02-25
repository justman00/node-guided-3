module.exports = () => (req, res, next) => {
  const userAgent = req.headers['user-agent'];

  if (/postman/i.test(userAgent)) {
    return res
      .status(400)
      .json({ msg: 'Tu esti de la postman si nu ai ce cauta aici' });
  }

  next();
};
