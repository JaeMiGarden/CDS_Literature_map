import route from "./routes";

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "Munhak";
    next();
};

export const onlyPublic = (req, res, next) => {
    if (req.user !== undefined) {
        return res.redirect(route.home);
    }
    next();
}

export const onlyPrivate = (req, res, next) => {
    if (req.user !== undefined) {
        next();
    }
    return res.redirect(route.home);
}