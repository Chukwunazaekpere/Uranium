import React from 'react';
import PropTypes from 'prop-types';

import MakeDeposit from './MakeDeposit';
import RecentDeposits from './RecentDeposits';

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const BottomTabs = createMaterialBottomTabNavigator();

const FundsDepositTab = (props) => {
    return(
        <BottomTabs.Navigator>
            <BottomTabs.Screen name='MakeDeposit' component={MakeDeposit} />
            <BottomTabs.Screen name='RecentDeposits' component={RecentDeposits} />
        </BottomTabs.Navigator>
    );
};

FundsDepositTab.propTypes = {
    
}

// const styles = StyleSheet.create({
//     container: {

//     },
// });


export default FundsDepositTab;