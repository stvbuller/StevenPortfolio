exports.isAuthenticated = function(req, res, next) {
  if(req.session.isAuthenticated) {
    next();
  } else {
    res.redirect("/login");
  }
}