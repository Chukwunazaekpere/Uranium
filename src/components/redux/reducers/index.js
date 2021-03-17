import { combineReducers } from "redux";


import LoginReducer from "./AuthReducers/LoginReducer";
import LogoutReducer from "./AuthReducers/LogoutReducer";
import SignupReducer from "./AuthReducers/SignupReducer";

import FundsDepositReducer from "./TransactionsReducers/FundsDepositReducer";
import FundsTransferReducer from "./TransactionsReducers/FundsTransferReducer";
import FundsWithdrawalReducer from "./TransactionsReducers/FundsWithdrawalReducer";

const combinedReducer = combineReducers({
    //===== AuthReducers =====
    login: LoginReducer,
    signup: SignupReducer,
    logout: LogoutReducer,
    //========================
    //===== TransactionReducers =======
    deposit: FundsDepositReducer,
    transfer: FundsTransferReducer,
    withdrawal: FundsWithdrawalReducer
});

export default combinedReducer;