import * as actionTypes from "../../actions/ActionTypes";
import {fundsWithrawalValidator} from "../../validators/transactionValidator";

const AppState = {
    users: {},
    withdrawals: [],
    error: [" "]
}

const FundsWithdrawalReducer = (state = AppState, action) => {
    switch(action.type){
        case actionTypes.WITHDRAW_FUNDS:
            const fundsWithdrawalDetails = action.payload;
            try {
                const validatedFundsWithdrawalReport = fundsWithrawalValidator(fundsWithdrawalDetails);
                // console.log("\n\t In Funds withdrawal reducer - report: ", validatedFundsWithdrawalReport);
                if(typeof(validatedFundsWithdrawalReport) == "string"){
                    throw validatedFundsWithdrawalReport
                }
                const newState = state;
                const count = newState.withdrawals.length;
                validatedFundsWithdrawalReport.id = count + 1;
                newState.error = [];
                newState.withdrawals.push(validatedFundsWithdrawalReport);
                return ({
                    ...newState,
                    status: true,
                })
            } catch (error) {
                return ({
                    ...state,
                    error: [error],
                })
            }
        default:
            return({
                ...state,
            })
    }
}


export default FundsWithdrawalReducer;