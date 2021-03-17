import * as actionTypes from "./ActionTypes";


export const depositFunds = (fundsDepositDetails) => {
    return({
        type: actionTypes.DEPOSIT_FUNDS,
        payload: {
            ...fundsDepositDetails
        }
    })
}

export const transferFunds = (fundsTransferDetails) => {
    console.log("\n\t In transfer action: ", fundsTransferDetails);
    return({
        type: actionTypes.TRANSFER_FUNDS,
        payload: {
            ...fundsTransferDetails
        }
    })
}

export const withdrawFunds = (fundsWithdrawalDetails) => {
    console.log("\n\t In withdrawal action: ", fundsWithdrawalDetails);
    return({
        type: actionTypes.WITHDRAW_FUNDS,
        payload: {
            ...fundsWithdrawalDetails
        }
    })
}