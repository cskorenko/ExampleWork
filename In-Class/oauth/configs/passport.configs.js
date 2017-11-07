const GitHubStrategy = require('passport-github2').Strategy;

const User = require('../models/user.model');

const githubAuth = {
  clientID: 'ab16ac8d866ca57ea832',
  clientSecret: '7d05b4b508eda7ef6e8652c5a23d8b97d249defb',
  callbackURL: 'http://localhost:3000/login/callback'
}

module.exports = function (passport) {

  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((obj, done) => {
    done(null, obj);
  });

  passport.use(new GitHubStrategy(githubAuth, findOrCreate));

  function findOrCreate (accessToken, refreshToken, profile, done) {

    const query = { 'github.id': profile.id };
    const updates = {
      $setonInsert: {
        'github.username': profile.username,
        'github.publicRepos': profile._json.public_repos
      }
    };
    const options = { upsert: true, new: true };

    return User.findOneAndUpdate(query, updates, options)
      .then((results) => {
        return done(null, results);
      })
      .catch((e) => {
        return done(err, null);
      });
  }
};
