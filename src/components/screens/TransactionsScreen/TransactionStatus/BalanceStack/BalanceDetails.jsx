import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { useSelector, useDispatch } from "react-redux";

const BalanceDetails = ({navigation}) => {
    let indicator = true;
    const deposits = useSelector(state => state.deposit.deposits);
    const transfers = useSelector(state => state.transfer.transfers);

    const nameDetails = useSelector(state => state.signup.users);
    const firstname = nameDetails['Firstname']
    const lastname = nameDetails['Lastname']
    const accountNumber = nameDetails["Phone"]
    
    return(
        <View style={styles.container}>
            <View style={styles.header}></View>
            <View style={styles.body}>
                <View style={styles.account_details}>
                    <Text style={styles.details_title} color="tomato" title="Log out" >
                        Your account balance:
                    </Text>
                    <Text>Name: {firstname} {lastname}</Text>
                    <Text>Account - number: {accountNumber} </Text>
                    <Text>Account - type: Savings </Text>
                    {/* <Text>Balance: {balance} </Text> */}
                    <Text>Deposits: {JSON.stringify(deposits)}</Text>
                    <Text>Transfers: {JSON.stringify(transfers)}</Text>
                </View>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.btnGroup}>
                    <Text style={styles.footer_text} color="tomato" onPress={() => navigation.navigate("Dashboard")}>
                        Dashboard
                    </Text>
                    <Text style={styles.footer_text} color="tomato" onPress={() => dispatch(LogoutUser(firstname))}>
                        Log out
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "tomato",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%"
    },
    header: {
        flex: 2,
        justifyContent: "flex-end",
        alignItems: "center",
        fontFamily: "Lucida Calligrapghy" 
    },
    body: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 17,
        backgroundColor: "#eee",
    },
    footer: {
        flex: 2,
        width: "80%",
        justifyContent: "center",
        alignItems: "center",

    },
    details_title: {
        fontWeight: "bold",
        color: "black",
        fontSize: 25,
        fontStyle: "italic",
        marginBottom: 12,
    },
    btnGroup: {
        flex: 1,
        justifyContent: "space-between",
        flexDirection: "row",
        width: "80%",
        marginTop: 12,
    },

    account_details: {
        fontWeight: "700",
        color: "black",
        fontSize: 20,
    },
    footer_text: {
        marginTop: 5,
        marginBottom: 10,
        fontStyle: "italic",
        fontWeight: 500,
        fontSize: 15,
        color: "cornflowerblue",
    },
})


export default BalanceDetails