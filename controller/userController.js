import route from '../routes';
import passport from 'passport';
import mongoose from 'mongoose';

const User = mongoose.model('User');

export const getLogin = (req, res) => {
    return res.render("login.html");
};

export const postLogin = passport.authenticate('local', {
    failureRedirect: route.login,
    successRedirect: route.home
});

export const getSignin = (req, res) => {
    return res.render("signin.html");
};

export const postSignin = async (req, res, next) => {
    const {
        body: { id, password, name, studentNumber }
    } = req;
    try {
        const user = await User({
            id, password, name, studentNumber
        }); 
        await user.save();
        next();
    } catch (error) {
        console.log(error);
        return res.redirect(route.home);
    }
}

export const getLogout = (req, res) => {
    req.logout();
    return res.redirect(route.home);
}
