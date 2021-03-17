import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { useSelector, } from "react-redux";


const AllTransactions = ({ navigation }) => {
    const deposits = useSelector(state => state.deposit.deposits);
    const transfers = useSelector(state => state.transfer.transfers);
    const withdrawals = useSelector(state => state.withdrawal.withdrawals);

    const firstname = useSelector(state => state.signup.users['Firstname']);
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.info_text}></Text>
                <Text style={styles.section_text}>
                    {firstname}'s Transactions.
                </Text>
            </View>
            <View style={styles.footer}>
                <View style={styles.boundary}>
                    <hr/>
                </View>
                <Text style={styles.section_text}>Deposits:</Text>
                <View style={styles.category}>
                    {
                        deposits.length > 0 ?
                        <View style={styles.details}>
                            <Text style={styles.footer_text}>Recent Deposits:</Text>
                            {
                                // console.log("\n\t Deposits: ", deposits)
                                deposits.map(deposit => {
                                    <FlatList keyExtractor={deposit.id}>
                                        <Text>Source Account Number: {deposit["Source Account Number"]}</Text>
                                        <Text>Receiving Account Number: {deposit["Receiving Account Number"]}</Text>
                                        <Text>Phone: {deposit["Phone"]}</Text>
                                        <Text>Amount: {deposit["Amount"]}</Text>
                                    </FlatList> 
                                }) 
                            }
                        </View> 
                            : 
                        <Text style={styles.info_text}>
                            No existing deposit records.
                        </Text>
                    }
                </View>
                <View style={styles.boundary}>
                    <hr/>
                </View>
                <Text style={styles.section_text}>Transfers:</Text>
                <View style={styles.category}>
                    {
                        transfers.length > 0 ?
                        <View style={styles.details}>
                            <Text style={styles.footer_text}>Recent Transfers:</Text>
                            {
                                transfers.map(transfer => (
                                    <FlatList key={transfer.id}>
                                        <Text>Receipient name: {transfer["Receipient Name"]}</Text>
                                        <Text>Receipient account: {transfer["Source Account"]}</Text>
                                        <Text>Recepient bank: {transfer["Phone"]}</Text>
                                        <Text>Amount: {transfer["Amount"]}</Text>
                                    </FlatList>
                                ))
                            }
                        </View>
                        : <Text style={styles.info_text}>
                                No existing transfer records.
                            </Text>
                    }
                </View>
                <View style={styles.boundary}>
                    <hr/>
                </View>
                <Text style={styles.section_text}>Withdrawals:</Text>
                <View style={styles.category}>
                    {
                        withdrawals.length > 0 ?
                        <View style={styles.details}>
                            <Text style={styles.footer_text}>Recent Withdrawals:</Text>
                            {
                                withdrawals.map(withdrawal => (
                                    <FlatList key={withdrawal.id}>
                                        <Text>Account Name: {withdrawal["Account Name"]}</Text>
                                        <Text>Account Number: {withdrawal["Account Number"]}</Text>
                                        <Text>Phone: {withdrawal["Phone"]}</Text>
                                        <Text>Amount: {withdrawal["Amount"]}</Text>
                                    </FlatList>
                                ))
                            }
                        </View>
                        : 
                        <Text style={styles.info_text}>
                            No existing withdrawal records.
                        </Text>
                    }
                </View>
                <View style={styles.boundary}>
                    <hr/>
                </View>
                <TouchableOpacity style={styles.btnGroup}>
                    <Text style={styles.footer_text} color="cornflowerblue" onPress={() => navigation.navigate("Dashboard")}>
                        Dashboard
                    </Text>
                    <Text style={styles.footer_text} color="cornflowerblue" onPress={() => dispatch(LogoutUser(firstname))}>
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
    },
    header: {
      flex: 1,
      marginBottom: 5,
      paddingHorizontal: 10,
      marginTop: 55,
    },
    footer: {
      flex: 4,
      width: "100%",
      backgroundColor: "#eee",
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 20,
    },
    btnGroup: {
      flex: 1,
      justifyContent: "space-between",
      flexDirection: "row",
    },
    form: {
      // borderRadius: 50,
    },
    button: {
      borderRadius: 20,
      marginBottom: 7,
    },
    form_title: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      color: "#171717",
      fontSize: 20,
      fontWeight: "bold",
      fontStyle: "italic",
    },
    header_title: {
      flex: 1,
      alignItems: "baseline",
      color: "#171717",
      fontSize: 40,
      fontWeight: "bold",
    },
    header_title1: {
      flex: 2,
    },
    boundary: {
        flex: 1,
        width: "100%",
        borderBottomWidth: 1,
    },
    category: {
      flex: 1,
      paddingLeft: "12%",
      height: "90%",
      flexDirection: "row",
    },
    info_text: {
        fontWeight: "700",
        color: "black",
        fontSize: 17,
    },
    section_text: {
        fontWeight: "700",
        color: "black",
        fontSize: 23,
        fontStyle: "italic"
    },
    btnGroup: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        height: "30%"
    },
    footer_text: {
        paddingHorizontal: 17,
        fontSize: 18,
        fontWeight: 700,
        color: "#171717",
        fontStyle: "italic",
    },
    details: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})



export default AllTransactions;