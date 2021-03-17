import * as actionTypes from "../../actions/ActionTypes";


const LogoutReducer = (state = [], action ) => {
    switch(action.type){
        case actionTypes.LOGOUT_USER:
            const user = action.payload;
            return ({
                ...state,
                users: [user]
            })
        default:
            return ({
                users: []
            })
    }
}

export default LogoutReducer;