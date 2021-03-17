
import * as actionTypes from "../../actions/ActionTypes";
import { fundsDepositValidator } from "../../validators/transactionValidator"

const AppState = {
    users: {},
    deposits: [],
    error: [" "]
}

const FundsDepositReducer = (state = AppState, action) => {
    switch(action.type){
        case actionTypes.DEPOSIT_FUNDS:
            const fundsDepositDetails = action.payload;
            try {
                const validatedFundsDepositReport = fundsDepositValidator(fundsDepositDetails)
                if(typeof(validatedFundsDepositReport) == "string"){
                    throw validatedFundsDepositReport
                };

                const newState = state;
                newState.error = [];
                const count = newState.deposits.length;
                validatedFundsDepositReport.id = count + 1;
                newState.deposits.push(validatedFundsDepositReport);
                return ({
                    ...newState,
                    status: true,
                })
            } catch (error) {
                return ({
                    ...state,
                    error: [error]
                })
            }
        default:
            return({
                ...state, 
            })
    }
}



export default FundsDepositReducer;