import React from 'react';
import PropTypes from 'prop-types';

import { createStackNavigator } from "@react-navigation/stack";
import BalanceActivityIndicator from "./BalanceActivityIndicator";
import BalanceDetails from "./BalanceDetails";

const BalanceStack = createStackNavigator();

const CheckBalanceStack = ({navigation}) => {
    return(
        <BalanceStack.Navigator screenOptions={{
            header: () => null
        }}>
            <BalanceStack.Screen name="BalanceActivity" component={BalanceActivityIndicator}/>
            <BalanceStack.Screen name="BalanceDetails" component={BalanceDetails}/>
        </BalanceStack.Navigator>
    );
};



export default  CheckBalanceStack;