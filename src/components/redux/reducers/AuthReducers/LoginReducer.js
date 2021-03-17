
import * as actionTypes from "../../actions/ActionTypes";
import { loginValidator } from "../../validators/authValidators";

const AppState = {
    users: {

    },
    error: []
}

const LoginReducer = (state = AppState, action) => {
    switch(action.type){
        case actionTypes.LOGIN_USER:
            const userDetails = action.payload.loginFormDetails;
            // console.log("\n\t reducer loginform: ", userDetails);
            const validatedLoginReport = loginValidator(userDetails);
            try {
                if(typeof(validatedLoginReport) == "string"){
                    throw validatedLoginReport;
                }
                const registeredUserFirstname = action.payload.userSignedUp['Firstname']
                if(registeredUserFirstname === undefined ){
                    let info = "You're not Registered. Please, signup."
                    return({
                        ...state,
                        error: [info]
                    })
                }
                return ({
                    ...state,
                    users: validatedLoginReport
                })
            } catch (error) {
                return ({
                    ...state,
                    error: [error]
                })
            }
        default:
            return({
                ...state
            })
    }
}


export default LoginReducer;