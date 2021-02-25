module.exports = (type) => {
  return (req, res, next) => {
    const date = new Date().toISOString();

    switch (type) {
      case 'small':
        console.info(
          `Date - ${date}, method: ${req.method}, path - ${req.path}`
        );
        break;
      case 'combined':
        const userAgent = req.headers['user-agent'];
        console.info(
          `Date - ${date}, method: ${req.method}, path - ${req.path}, user agent - ${userAgent}, ip address: ${req.ip}`
        );
        break;
    }

    next();
  };
};
