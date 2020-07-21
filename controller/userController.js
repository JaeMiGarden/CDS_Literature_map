import route from '../routes';


export const getLogin = (req, res) => {
    return res.render("login.html");

};

export const getSignin = (req, res) => {
    return res.render("signin.html");
};
