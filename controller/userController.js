import route from '../routes';


export const getLogin = (req, res) => {
    console.log("LOGIN");
    return res.render("login.html");

};

export const getSignin = (req, res) => {
    console.log("getSigniin");
    return res.sendFile("signin.html");
};