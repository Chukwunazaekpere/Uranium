import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, ActivityIndicator, Dimensions, View, 
    TouchableOpacity, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

import {LogoutUser} from "../../redux/actions/AuthActions";


const UsersDashboard = ({navigation}) => {
    const firstname = useSelector(state => state.signup.users['Firstname'] );
    const dispatch = useDispatch();

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.brand_text1}></Text>
                <Text style={styles.brand_text}>Welcome {firstname}!</Text>
            </View>
            <View style={styles.body}>
                <TouchableOpacity style={styles.menu}>
                    <Text style={styles.body_content} onPress={() => navigation.navigate("MakeTransfer")}>Transfer Funds</Text>
                    <Text style={styles.body_content} onPress={() => navigation.navigate("MakeDeposit")}>Deposit Funds</Text>
                    <Text style={styles.body_content} onPress={() => navigation.navigate("MakeWithdrawal")}>Make Withdrawal</Text>
                    <Text style={styles.body_content} onPress={() => navigation.navigate("BalanceActivity")}>Check Balance</Text>
                    <Text style={styles.body_content} onPress={() => navigation.navigate("AllTransactions")}>All Transactions</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.footer}>
                <View style={styles.button}>
                    <Button color="tomato" title="Log out" onPress={() => dispatch(LogoutUser(firstname))}/>
                </View>
            </View>
        </View>
    )
}

UsersDashboard.propTypes = {
    navigation: PropTypes.object.isRequired
}

const { height } = Dimensions.get("screen");
const logoHeight = height * .28;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "tomato",
    },
    header: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "tomato",
    },
    body: {
        flex: 3,
        justifyContent: "center",
        alignItems: "flex-start",
        backgroundColor: "#eee",
        width: "100%",
        borderRadius: 30,
        paddingHorizontal: 25,
        paddingVertical: 40,
    },
    footer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "tomato"
    },
    body_content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 10,
        marginTop: 10,
        marginBottom: 10,
        fontSize: 20,
        width: "100%",
        borderRadius: 12,
        height: 30,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: "#f4f4f4",
       
    },
    brand_title: {
        flex: 1,
        marginTop: 70,
        color: "#171717",
        fontSize: 40,
        fontWeight: "bold"
    },
    brand_text: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        color: "#171717",
        fontSize: 23,
        fontWeight: "bold",
        fontStyle: "italic"
    },
    brand_text1: {
        flex: 2,
    },
    button: {
        flex: 1,
        marginTop: 20,
        marginBottom: 5,
        borderRadius: 10,
        marginLeft: 12
    },
    menu: {
        flex: 1,
        width: "100%",
    }
   
})

export default UsersDashboard;
