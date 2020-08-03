// global
const HOME = "/";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SiGNIN = "/signin";
const MAIN = "/main";

// USER
const USER = "/user";

// BOARD
const BOARD = "/board";
const BOARD_DETAIL = "/:id";
const WRITE = "/write";
const BOARD_DELETE = "/delete/:id";
const BOARD_LIST = "/list";
//API
const API = "/api";
const LOAD_POSTING = "/loadPosting";
const MAP_BOARD = "/board";
const IMAGE = "/image/:id";
// static

const route = {
    main:MAIN,
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
    delete: (id) => {
        if (id) {
            return `/board/delete/${id}`;
        } else {
            return BOARD_DELETE;
        }
    },
    board_list: BOARD_LIST,

    api: API,
    loadPosting: LOAD_POSTING,
    mapBoard: MAP_BOARD,

    image: (id) => {
        if (id) {
            return `/api/image/${id}`;
        } else {
            return IMAGE;
        }
    }
};

export default route;