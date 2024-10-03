const verifyRole = (roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).send("Access denied. You don't have the required permissions.");
    }
    next();
  };
};

module.exports = verifyRole;
