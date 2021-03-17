import * as actionTypes from "../../actions/ActionTypes";
import {fundsTransferValidator} from "../../validators/transactionValidator";

const AppState = {
    users: {},
    transfers: [],
    error: [" "]
}

const FundsTransferReducer = (state = AppState, action) => {
    switch(action.type){
        case actionTypes.TRANSFER_FUNDS:
            const fundsTransferDetails = action.payload;
            try {
                const validatedFundsTransferReport = fundsTransferValidator(fundsTransferDetails);
                console.log("\n\t In Funds trnasfer reducer - report: ", validatedFundsTransferReport);
                if(typeof(validatedFundsTransferReport) == "string"){
                    throw validatedFundsTransferReport
                }
                const newState = state;
                newState.error = [];
                const totalTransfers = newState.transfers.length;
                validatedFundsTransferReport.id = totalTransfers + 1;  // add an id - property to the new record.
                newState.transfers.push(validatedFundsTransferReport);
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

export default FundsTransferReducer;