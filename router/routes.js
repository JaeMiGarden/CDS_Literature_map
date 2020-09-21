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
const BOARD_DELETE = "/:id";
const BOARD_READ = "/read/:id";
const BOARD_LIST = "/list";
//API
const API = "/api";
const LOAD_POSTING = "/loadPosting";
const MAP_BOARD = "/board";
const IMAGE = "/image/:id";
const TOTAL_BOARD = "/totalBoard";
const VERIFY_ID = "/verifyId";
const PDF_CREATE = "/pdf/:id";
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
            return `/board/read/${id}`;
        }
        else {
            return BOARD_READ;
        }
    },
    write: WRITE,
    delete: (id) => {
        if (id) {
            return `/board/${id}`;
        } else {
            return BOARD_DELETE;
        }
    },
    board_list: BOARD_LIST,

    // API
    api: API,
    loadPosting: LOAD_POSTING,
    mapBoard: MAP_BOARD,
    totalBoard: TOTAL_BOARD,
    image: (id) => {
        if (id) {
            return `/api/image/${id}`;
        } else {
            return IMAGE;
        }
    },
    verifyId: VERIFY_ID,
    pdfCreate : PDF_CREATE,
};

export default route;