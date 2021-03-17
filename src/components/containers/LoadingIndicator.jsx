import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';


const LoadingIndicator = ({navigation }) => {
    {
        setTimeout(()=> (navigation.navigate("Dashboard")), 7000)
    }
    return(
        <View style={styles.container}>
            <View style={styles.header}></View>
            <View style={styles.body}>
                <Text style={styles.loading_text}>Setting up your dashboard</Text>
                <ActivityIndicator color="cornflowerblue" size="large" />
                <Text style={styles.loading_text2}>Please wait...</Text>
            </View>
            <View style={styles.footer}></View>
        </View>
    );
};

// LoadingIndicator.PropTypes = {
//     navigation: PropTypes.object.isRequired,
//     text1: PropTypes.string.isRequired,
//     text2: PropTypes.string.isRequired,
// }

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
        fontSize: 23,
    },
    loading_text2: {
        fontWeight: "700",
        color: "black",
        fontSize: 18,
        fontStyle: "italic"
    }
})


export default LoadingIndicator;