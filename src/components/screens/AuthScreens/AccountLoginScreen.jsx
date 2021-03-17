import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

import { LoginUser } from "../../redux/actions/AuthActions";
import { useDispatch, useSelector } from "react-redux";

import * as Icons from "@expo/vector-icons";


const AccountLoginScreen = ({navigation}) => {
    const [loginForm, setLoginForm] = useState({
        "Account Number": "", 
        "Password": ""
    })
    const formFields = Object.keys(loginForm);
    const icons = [ "bank", "user-secret"]

    const loginFormHandler = (field, value) => {
        const newLoginDetails = loginForm;
        newLoginDetails[field] = value;
        setLoginForm(newLoginDetails);
    }

    const formError =  useSelector(state => state.login.error);
    const userSignedUp =  useSelector(state => state.signup.users);
    // console.log("\n\t Form error: ", formError);
    const dispatchLoginForm = useDispatch();
    
    const submitLoginForm = () => {
        dispatchLoginForm(LoginUser(loginForm, userSignedUp));
    }
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.header_title}>Uranium Bank</Text>
            </View>
            <View style={styles.footer}>
                <Text style={styles.form_title}>Login With Your Account Number</Text>
                <Text style={styles.error}>{formError}</Text>
                <View style={styles.form}>
                    {
                        formFields.map((field, index) => (
                            <View style={styles.inputContainer} key={field}>
                                <Icons.FontAwesome style={styles.icon} size={20} name={icons[index]} />
                                <TextInput style={styles.inputFields} placeholder={field} 
                                    onChangeText={value => loginFormHandler(field, value)}
                                />
                            </View>
                        ))
                    }
                </View>
                <View style={styles.btnGroup}>
                    <View style={styles.button}>
                        <Icons.FontAwesome.Button name="sign-in" backgroundColor="tomato"  onPress={() => submitLoginForm()}>
                            LOGIN
                        </Icons.FontAwesome.Button>
                    </View>
                    <View style={styles.button}>
                        <Icons.FontAwesome.Button name="home" backgroundColor="cornflowerblue"  onPress={() => navigation.navigate("Home")} >
                            HOME
                        </Icons.FontAwesome.Button>
                    </View>
                </View>
                <Text style={styles.footer_text} onPress={() => navigation.navigate("Signup") }>Sign up</Text>
                <Text style={styles.footer_text} onPress={() => navigation.navigate("EmailLogin") }> Login With Email</Text>
            </View>
        </View>
    );
};

AccountLoginScreen.propTypes = {
    navigation: PropTypes.object
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "tomato"
    },
    header: {
        flex: 2,
        paddingHorizontal: 10,
        marginTop: 80,
    },
    footer: {
        flex: 3,
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
        marginBottom: 15,
    },
    inputContainer: {
        flex: 1,
        flexDirection: "row",
        borderWidth: 3,
        marginTop: 3,
        marginBottom: 7,
        borderRadius: 7,

    },
    icon: {
        padding: 7,
        borderRightWidth: 1,
    },
    form: {
        borderRadius: 10,
        borderBottomColor: "black"
    },
    inputFields: {
        flex: 1,
        justifyContent: "center",
        padding: 3,
        paddingLeft: 10,
        fontSize: 17,
        color: '#424242'
    },
    footer_text: {
        marginTop: 5,
        marginBottom: 10,
        fontStyle: "italic",
        fontWeight: 500,
        fontSize: 15,
        color: "blue"
    },
    button: {
        borderRadius: 20
    },
    form_title: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        color: "#171717",
        fontSize: 20,
        fontWeight: "bold",
        fontStyle: "italic"
    },
    header_title: {
        flex: 1,
        alignItems: "baseline",
        color: "#171717",
        fontSize: 40,
        fontWeight: "bold",
        marginTop: "40%"
    },
    error: {
        color: "red",
        fontWeight: "700",
        fontSize: 15
    },
});


export default AccountLoginScreen;

