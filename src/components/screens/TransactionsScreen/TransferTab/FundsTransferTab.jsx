import React from 'react';
import PropTypes from 'prop-types';

import MakeTransfer from './MakeTransfer';
import RecentTransfers from './RecentTransfers';

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const BottomTabs = createMaterialBottomTabNavigator();

const FundsTransferTab = (props) => {
    return(
        <BottomTabs.Navigator>
            <BottomTabs.Screen name='MakeTransfer' component={MakeTransfer} />
            <BottomTabs.Screen name='RecentTransfers' component={RecentTransfers} />
        </BottomTabs.Navigator>
    );
};

FundsTransferTab.propTypes = {
    
}

// const styles = StyleSheet.create({
//     container: {

//     },
// });


export default FundsTransferTab;