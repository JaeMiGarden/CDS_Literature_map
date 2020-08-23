import route from "../router/routes";
import multer from 'multer';

const multerPicture = multer({ dest: 'uploads', limits:{fileSize: 65536 * 65536} });

export const uploadPicture = multerPicture.single('picture');

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "Munhak";
    next();
};

export const onlyPublic = (req, res, next) => {
    if(req.isAuthenticated()) {
        return res.redirect(route.home);
    }
    else {
        next();
    }
}

export const onlyPrivate = (req, res, next) => {
    if (req.isAuthenticated()){
        next();
    }
    else {
        return res.redirect(route.login);
    }
}
