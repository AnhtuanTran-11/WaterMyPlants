import {
  LOG_IN_START,
  LOG_IN_SUCCESS,
  LOG_IN_FAIL,
  // SIGN_OUT,
} from "../actions/loginActions";

const initialValue = {
  userData: {
    username: "",
    password: "",
    phoneNumber: 0,
    //plantList: [],
  },
  loadingLogin: false,
  loginError: "",
  isLoggedIn: false,
};

export const loginReducer = (state = initialValue, action) => {
  // console.log(action, "login reducer");
  switch (action.type) {
    case LOG_IN_START:
      return {
        ...state,
        loadingLogin: true,
      };
    case LOG_IN_SUCCESS:
      return {
        ...state,
        userData: action.payload,
        loadingLogin: false,
        loginError: "",
        isLoggedIn: true,
      };
    case LOG_IN_FAIL:
      return {
        ...state,
        loadingLogin: false,
        loginError: action.payload,
      };
    // case SIGN_OUT:
    //   return {
    //     ...state,
    //     userData: "",
    //     loadingLogin: false,
    //     loginError: "",
    //     isLoggedIn: false,
    //   };
    default:
      return state;
  }
};
