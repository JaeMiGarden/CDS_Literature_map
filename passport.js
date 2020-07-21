import passport from 'passport';
import passport_local from 'passport-local';
import User from './database/model/User';

const LocalStrategy = passport_local.Strategy;

passport.use(new LocalStrategy({
    usernameField: 'id',
    passwordField: 'password'
},
    async (username, password, done) => {
        User.findOne({ id: username }, (err, user) => {
            if (err) { return done(err); }
            if (!user) { return done(null, false, {message:"incorrect username"}); }
            if (!user.verifyPassword(user.password, password)) {
                return done(null, false, {
                message:"incorrect password"
                });
            };
            return done(null, user);
        }) 
    }
))

passport.serializeUser((user, done) => done(null, user));

passport.deserializeUser((user, done) => done(null, user));