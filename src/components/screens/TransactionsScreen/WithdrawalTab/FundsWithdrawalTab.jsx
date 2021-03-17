import React from 'react';
import PropTypes from 'prop-types';

import MakeWithdrawal from './MakeWithdrawal';
import RecentWithDrawals from './RecentWithDrawals';

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const BottomTabs = createMaterialBottomTabNavigator();

const FundsWithdrawalTab = (props) => {
    return(
        <BottomTabs.Navigator>
            <BottomTabs.Screen name='MakeWithdrawal' component={MakeWithdrawal} />
            <BottomTabs.Screen name='RecentWithDrawals' component={RecentWithDrawals} />
        </BottomTabs.Navigator>
    );
};

FundsWithdrawalTab.propTypes = {
    
}

// const styles = StyleSheet.create({
//     container: {

//     },
// });


export default FundsWithdrawalTab;