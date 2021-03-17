import React from "react";
import { Button, Image, Dimensions, View, 
    ImageBackground, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

import { useSelector } from "react-redux";
import * as Icons from "@expo/vector-icons";


const SplashScreen = ({navigation}) => {
    // check if a "Firstname" exists in order to render the signup button or not
    const firstname = useSelector(state => state.signup.users['Firstname']);
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.brand_title}>Uranium Bank</Text>
            {/* <ImageBackground  style={styles.backgroundImage}> */}
                    <Image
                        style={styles.logo}
                        source={require("../../../assets/homescsq.png")}
                        resizeMode="stretch"
                    />
            {/* </ImageBackground> */}
                    <Text style={styles.brand_text}>You Own This Bank...</Text>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.footer_text}>Welcome to Uranium Bank</Text>
                    <View style={styles.button}>
                        {
                            !firstname ?
                            <Icons.FontAwesome.Button name="registered" backgroundColor="tomato" title="Sign up" onPress={() => navigation.navigate("Signup", {mes: "Hi"})}>
                                REGISTER
                            </Icons.FontAwesome.Button>
                            : null
                        }
                    </View>
                    <View style={styles.button}>
                        <Icons.FontAwesome.Button  name="sign-in" backgroundColor="tomato" title="Log in" onPress={() => navigation.navigate("AccountLogin")} >
                            SIGN IN
                        </Icons.FontAwesome.Button>
                    </View>
                </View>
        </View>
    )
}

SplashScreen.propTypes = {
    navigation: PropTypes.object.isRequired
}

const { height } = Dimensions.get("screen");
const logoHeight = height * .28;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "tomato",
    },
    backgroundImage: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "tomato",
        paddingBottom: 30,
        resizeMode: "cover",
        opacity: 0.6
    },
    logo: {
        width: logoHeight,
        height: logoHeight,
        borderRadius: logoHeight
    },
    header: {
        flex: 3,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "tomato",
    },
    footer: {
        flex: 1,
        backgroundColor: "cornflowerblue",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 28,
        paddingHorizontal: 10
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
        fontWeight: "bold"
    },
    footer_text: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        color: "#171717",
        fontSize: 22,
        fontWeight: "bold",
        paddingHorizontal: "10%"
    },
    button: {
        flex: 1,
        justifyContent: "space-between",
        paddingHorizontal: 45,
        marginTop: 20,
        marginBottom: 5,
        borderRadius: 10
    },
    


})

export default SplashScreen;
