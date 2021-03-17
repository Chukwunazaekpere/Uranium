import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';


const AllTransactionsActivityIndicator = ({navigation}) => {
    setTimeout(() => {
        navigation.navigate("AllTransactions")
    }, 5000);

    return(
        <View style={styles.container}>
            <View style={styles.header}></View>
            <View style={styles.body}>
                <Text style={styles.loading_text}>Retrieving all transaction details.</Text>
                <ActivityIndicator size="large" />
                <Text style={styles.loading_text}>Please wait...</Text>
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
        paddingHorizontal: 17
    },
    footer: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
    },
    loading_text: {
        fontWeight: "700",
        color: "black",
        fontSize: 21,
        fontStyle: "italic"
    }
})


export default AllTransactionsActivityIndicator