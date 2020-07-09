const log = require("debug")("oauth");

module.exports = (req, res, next) => {
  // NOTE: if using jwt, you'd verify the token here.
  if (req.user) {
    log(`authenticated ${req.user.profile.id}`);
    next();
  } else {
    log('user not authenticated');
    // Path to start auth flow
    res.redirect('/auth/google');
  }
};
