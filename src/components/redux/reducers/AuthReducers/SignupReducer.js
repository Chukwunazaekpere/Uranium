
import * as actionTypes from "../../actions/ActionTypes";
import { signupValidator } from "../../validators/authValidators";

const AppState = {
    users: {

    },
    error: []
}

const SignupReducer = (state = AppState, action) => {
    switch(action.type){
        case actionTypes.SIGNUP_USER:
            const userDetails = action.payload;
            try {
                const validatedsSignupReport = signupValidator(userDetails);

                if(typeof(validatedsSignupReport) == "string"){
                    throw validatedsSignupReport
                }
                // console.log("\n\t Report: ", validatedsSignupReport);
                const newState = state;
                newState.error = [];
                return ({
                    ...newState,
                    users: validatedsSignupReport
                })
            } catch (error) {
                // console.log("\n\t Error in reducer: ", error);
                return ({
                    ...state,
                    error
                })
            }
        default:
            return({
                ...state
            })
    }
}



export default SignupReducer;