import * as actionTypes from "./ActionTypes";

export const LoginUser = (loginFormDetails, userSignedUp) => {
    return({
        type: actionTypes.LOGIN_USER,
        payload: {
            loginFormDetails,
            userSignedUp
        }
    });
}

export const LogoutUser = (currentState) => {
    return({
        type: actionTypes.LOGOUT_USER,
        payload: currentState
    });
}

export const SignupUser = (signupFormDetils) => {
    return({
        type: actionTypes.SIGNUP_USER,
        payload: {
            ...signupFormDetils
        }
    });
}