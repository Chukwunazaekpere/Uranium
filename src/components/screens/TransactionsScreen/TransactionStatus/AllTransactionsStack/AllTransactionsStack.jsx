import React from 'react';
import PropTypes from 'prop-types';

import { createStackNavigator } from "@react-navigation/stack";
import AllTransactionsActivityIndicator from "./AllTransactionsActivityIndicator";
import AllTransactions from "./AllTransactions";

const TransactionsStack = createStackNavigator();

const AllTransactionsStack = ({navigation}) => {
    return(
        <TransactionsStack.Navigator screenOptions={{
            header: () => null
        }}>
            <TransactionsStack.Screen name="AllTransactionsActivityIndicator" component={AllTransactionsActivityIndicator}/>
            <TransactionsStack.Screen name="AllTransactions" component={AllTransactions}/>
        </TransactionsStack.Navigator>
    );
};



export default  AllTransactionsStack;