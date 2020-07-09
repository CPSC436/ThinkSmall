const log = require("debug")("oauth");

module.exports = (req, res, next) => {
  // NOTE: if using jwt, you'd verify the token here.
  // console.log(Object.keys(req))
  // console.log(Object.keys(req.cookies))
  // console.log(Object.keys(req.session))
  // console.log(req._passport)
  console.log('isUserAuthenticated', req.user)
  // if (req.user) {
  //   log(`authenticated ${req.user.profile.id}`);
  //   next();
  // } else {
  //   log('user not authenticated');
  //   // Path to start auth flow
  //   res.redirect('/auth/google');
  // }
  next();
};
