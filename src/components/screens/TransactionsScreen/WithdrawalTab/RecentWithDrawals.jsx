import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

import { useSelector } from "react-redux";


const RecentWithdrawals = (props) => {
    const withdrawals = useSelector(state => state.withdrawal.withdrawals);
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.header_title1}></Text>
                <Text style={styles.header_title}>Record For Recent Withdrawals</Text>
            </View>
            <View style={styles.footer}>
                {
                    withdrawals.length > 0 ?
                    withdrawals.map(data => (
                        <View key={data.id}>
                            <Text>{data["Receipient Name"]}: </Text>
                            <Text>{data["Receipient Account Number"]}</Text>
                            <Text>{data["Phone"]}</Text>
                            <Text>{data["Amount"]}</Text>
                        </View>
                    )) : <Text style={styles.footer_text}>You've got no records of fund - withdrawals</Text>
                }
            </View>
        </View>
    );
};
const { height } = Dimensions.get("screen");
const logoHeight = height * .28;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "tomato"
    },
    header: {
        flex: 1,
        marginBottom: 5,
        paddingHorizontal: 10,
        marginTop: 55,
    },
    footer: {
        flex: 3,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#eee",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    footer_text: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        fontStyle: "italic",
        fontWeight: 500,
        fontSize: 20,
        color: "blue"
    },
    header_title: {
        flex: 1,
        alignItems: "baseline",
        color: "#171717",
        fontSize: 23,
        fontWeight: "bold"
    },
    header_title1: {
        flex: 2,
    },
  });

  

export default RecentWithdrawals;