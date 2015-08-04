/**
 * Created by ahalych on 6/14/2014.
 */

// load all the things we need
var LocalStrategy = require('passport-local').Strategy;

//// load up the user model
//var User = require('../models/user');
//
//// load the auth variables

module.exports = function (passport) {

    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session

    // used to serialize the user for the session
//    passport.serializeUser(function (user, done) {
//        done(null, user.id);
//    });
//
//    // used to deserialize the user
//    passport.deserializeUser(function (id, done) {
//        User.findById(id, function (err, user) {
//            done(err, user);
//        });
//    });
//
//    // =========================================================================
//    // LOCAL LOGIN =============================================================
//    // =========================================================================
//    passport.use('local-login', new LocalStrategy({
//            // by default, local strategy uses username and password, we will override with email
//            usernameField: 'login',
//            passwordField: 'password',
//            passReqToCallback: true // allows us to pass in the req from our route (lets us check if a user is logged in or not)
//        },
//        function (req, login, password, done) {
//            if (login)
//            //login = email.toLowerCase(); // Use lower-case e-mails to avoid case-sensitive e-mail matching
//
//            // asynchronous
//                process.nextTick(function () {
//                    User.findOne({ 'login': login }, function (err, user) {
//                        // if there are any errors, return the error
//                        if (err)
//                            return done(err);
//
//                        // if no user is found, return the message
//                        if (!user)
//                            return done(null, false, 'No user found.');
//
//                        if (!user.validPassword(password))
//                            return done(null, false, 'Oops! Wrong password.');
//
//                        // all is well, return user
//                        else
//                            return done(null, user);
//                    });
//                });
//
//        }));
//
//    // =========================================================================
//    // LOCAL SIGNUP ============================================================
//    // =========================================================================
//    passport.use('local-signup', new LocalStrategy({
//            // by default, local strategy uses username and password, we will override with email
//            usernameField: 'email',
//            passwordField: 'password',
//            passReqToCallback: true // allows us to pass in the req from our route (lets us check if a user is logged in or not)
//        },
//        function (req, email, password, done) {
//            if (email)
//                email = email.toLowerCase(); // Use lower-case e-mails to avoid case-sensitive e-mail matching
//
//            // asynchronous
//            process.nextTick(function () {
//                // if the user is not already logged in:
//                if (!req.user) {
//                    User.findOne({ 'email': email }, function (err, user) {
//                        // if there are any errors, return the error
//                        if (err)
//                            return done(err);
//
//                        // check to see if theres already a user with that email
//                        if (user) {
//                            return done(null, false, 'That email is already taken.');
//                        } else {
//
//                            // create the user
//                            var newUser = new User();
//
//                            newUser.email = email;
//                            newUser.password = newUser.generateHash(password);
//
//                            newUser.save(function (err) {
//                                if (err)
//                                    throw err;
//
//                                return done(null, newUser);
//                            });
//                        }
//
//                    });
//                    // if the user is logged in but has no local account...
//                } else if (!req.user.email) {
//                    // ...presumably they're trying to connect a local account
//                    var user = req.user;
//                    user.email = email;
//                    user.password = user.generateHash(password);
//                    user.save(function (err) {
//                        if (err)
//                            throw err;
//                        return done(null, user);
//                    });
//                } else {
//                    // user is logged in and already has a local account. Ignore signup. (You should log out before trying to create a new account, user!)
//                    return done(null, req.user);
//                }
//
//            });
//
//        }));
};

