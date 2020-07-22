import route from '../routes';

export const apiPicture = async (req, res) => {
    const {
        params: { id }
    } = req;
    try {
        console.log("?");
    } catch (error) {
        console.log(error);
        return res.redirect(route.home);
    }
     
}
