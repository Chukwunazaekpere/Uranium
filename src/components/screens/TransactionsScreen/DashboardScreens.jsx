import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import UsersDashboard from "./UsersDashBoard";
import LoadingIndicator from "../../containers/LoadingIndicator";

import CheckBalanceStack from "./TransactionStatus/BalanceStack/CheckBalanceStack";
import AllTransactionsStack from "./TransactionStatus/AllTransactionsStack/AllTransactionsStack";

import FundsTransferTab from "./TransferTab/FundsTransferTab";
import FundsDepositTab from "./Deposit/FundsDepositTab";
import FundsWithdrawalTab from "./WithdrawalTab/FundsWithdrawalTab";

import TransactionActivityInfo from "./TransactionStatus/MessageTypes/TransactionActivityInfo";
import RedirectTransaction from "./TransactionStatus/MessageTypes/RedirectTransaction";

const DashboardStack = createStackNavigator();

const DashboardScreens = ({ navigation }) => {
  return (
    <DashboardStack.Navigator
      screenOptions={{
        header: () => null,
      }}
    >
      <DashboardStack.Screen
        name="LoadingIndicator"
        component={LoadingIndicator}
      />
      <DashboardStack.Screen name="Dashboard" component={UsersDashboard} />
      <DashboardStack.Screen name="MakeTransfer" component={FundsTransferTab} />
      <DashboardStack.Screen name="MakeDeposit" component={FundsDepositTab} />
      <DashboardStack.Screen
        name="MakeWithdrawal"
        component={FundsWithdrawalTab}
      />
      <DashboardStack.Screen
        name="AllTransactions"
        component={AllTransactionsStack}
      />
      <DashboardStack.Screen
        name="BalanceActivity"
        component={CheckBalanceStack}
      />
      <DashboardStack.Screen
        name="TransactionActivityInfo"
        component={TransactionActivityInfo}
      />
      <DashboardStack.Screen
        name="RedirectTransaction"
        component={RedirectTransaction}
      />
    </DashboardStack.Navigator>
  );
};

export default DashboardScreens;
