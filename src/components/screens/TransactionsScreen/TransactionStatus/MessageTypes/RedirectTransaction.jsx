import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';


const TransactionStatusInfo = ({navigation, route}) => {
    const type = route.params.type;

    setTimeout(() => {
        navigation.navigate("Dashboard")
    }, 5000);
    return(
        <View style={styles.container}>
            <View style={styles.header}></View>
            <View style={styles.body}>
                <Text style={styles.loading_text}>
                    Transaction was {type}... 
                </Text>
                <ActivityIndicator color="cornflowerblue" size="large" />
                <Text style={styles.loading_text2}>
                    Redirecting back to dashboard.
                </Text>
            </View>
            <View style={styles.footer}></View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "tomato",
        justifyContent: "center",
        alignItems: "center",
    },
    header: {
        flex: 2,
        justifyContent: "flex-end",
        alignItems: "center",
        fontFamily: "Lucida Calligrapghy",
        width: "100%"
    },
    body: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 50,
        paddingHorizontal: 17,
        width: "100%"

    },
    footer: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
        width: "100%"
    },
    loading_text: {
        fontWeight: "700",
        color: "black",
        fontSize: 22,
        fontStyle: "italic"
    },
    loading_text2: {
        fontWeight: "700",
        color: "black",
        fontSize: 17,
        fontStyle: "italic"
    }
})


export default TransactionStatusInfo;






