import React from "react";
import PropTypes from 'prop-types';
import {  useSelector } from "react-redux";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
// ==================================== Screen Imports =================================
import SplashScreen from "./components/screens/SplashScreen";
import SignupScreen from "./components/screens/AuthScreens/SignupScreen";
import AccountLoginScreen from './components/screens/AuthScreens/AccountLoginScreen';
import EmailLoginScreen from './components/screens/AuthScreens/EmailLoginScreen';
import DashboardScreens from './components/screens/TransactionsScreen/DashboardScreens';

const Stack = createStackNavigator();

const AppIndex = (props) => {
    // If the signup - Reducer has a firstname, then a user has signed - up
    const signupUsers = useSelector(state => state.signup.users['Firstname'] );

    // If the login - Reducer has a password, then a user has signed - up
    const loginUsers = useSelector(state => state.login.users['Password'] );

    const logoutUser = useSelector(state => state.logout.users );

    return(
        <NavigationContainer>
            {
                (signupUsers || loginUsers) && (logoutUser.length === 0) ? (
                <DashboardScreens />
                ) : (
                        <Stack.Navigator screenOptions={{
                                header: () => null
                            }} >
                            <Stack.Screen name="Home" component={SplashScreen} />
                            <Stack.Screen name="Signup" component={SignupScreen} />
                            <Stack.Screen name="AccountLogin" component={AccountLoginScreen} />
                            <Stack.Screen name="EmailLogin" component={EmailLoginScreen} />
                        </Stack.Navigator>
                    )
            }
        </NavigationContainer>
    );
};


export default AppIndex;