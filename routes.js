// global
const HOME = "/";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SiGNIN = "/signin";

// USER
const USER = "/user";

// BOARD
const BOARD = "/board";
const BOARD_DETAIL = "/:id";
const WRITE = "/write";

//API
const API = "/api";
const LOAD_POSTING = "/loadPosting";

const route = {
    home: HOME,
    login : LOGIN,
    signin: SiGNIN,
    logout: LOGOUT,

    user: USER,
    
    board: BOARD,
    read: (id) => {
        if (id) {
            return `/board/${id}`;
        }
        else {
            return BOARD_DETAIL;
        }
    },
    write: WRITE,

    api: API,
    loadPosting: LOAD_POSTING,
};

export default route;