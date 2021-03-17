import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { View, Button, TextInput, Text, StyleSheet } from 'react-native';

import {SignupUser} from "../../redux/actions/AuthActions";
import { useDispatch, useSelector } from "react-redux";
// import SimpleButton from "../../containers/SimpleButton";

import * as Icons from "@expo/vector-icons";


const SignupScreen = ({navigation, route}) => {
    // console.log("\n\t route: ", route.params.mes);
    const [formInput, setFormInput] = useState({
        "Firstname": "",
        "Lastname": "", 
        "Email": "",
        "Phone": "",
        "Password": "",
        "Confirm Password": ""
    }) 
    const formFields = Object.keys(formInput);
    const formError =  useSelector(state => state.signup.error);
    const icons = ["user-circle", "user-circle", "inbox", "mobile-phone", "user-secret", "user-secret"]
    
    const inputHandler = (field, value) => {
        const newFormInput = formInput;
        newFormInput[field] = value;
        setFormInput({
            ...newFormInput
        })
    };

    const dispatchSignupForm = useDispatch();
    const sendFormDetails = () => {
        dispatchSignupForm(SignupUser(formInput))
    }
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.header_title1}></Text>
                <Text style={styles.header_title}>Uranium Bank</Text>
            </View>
            <View style={styles.footer}>
                <Text style={styles.form_title}>Sign up</Text>
                <Text style={styles.error}>{formError}</Text>
                <View style={styles.form}>
                    {
                        formFields.map((field, index) => (
                            <View style={styles.inputContainer} key={field}>
                                <Icons.FontAwesome style={styles.icon} size={20} name={icons[index]} />
                                <TextInput onChangeText={event => inputHandler(field, event)}
                                style={styles.inputFields} placeholder={field}
                                textContentType={field === "Password" || field === "Confirm Password" ? "password" : 
                                field === "Phone" ? "telephoneNumber" : "name"} />
                            </View>
                        ))
                    }
                </View>
                <Text style={styles.footer_text}>Signing up gives you more access to your bank...</Text>
                <View style={styles.btnGroup}>
                    <View style={styles.button}>
                        <Icons.FontAwesome.Button backgroundColor="tomato" color="#fff" name="sign-in" onPress={() => sendFormDetails()}> 
                            SIGN UP
                        </Icons.FontAwesome.Button>
                    </View>
                    <View style={styles.button}>
                        <Icons.FontAwesome.Button name='home' backgroundColor="cornflowerblue"  title="Home" onPress={() => navigation.navigate("Home") }>
                            HOME
                        </Icons.FontAwesome.Button>
                    </View>
                </View>
                <Text style={styles.footer_text2}>Already signed-up? Please, 
                    <Text style={{color:"blue"}} onPress={() => navigation.navigate("AccountLogin")}> Login</Text>
                </Text>
            </View>
        </View>
    );
};

SignupScreen.propTypes = {
    navigation: PropTypes.object
}

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
        marginBottom: 20,
    },
    form: {
        // borderRadius: 50,
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
    inputFields: {
        flex: 1,
        justifyContent: "center",
        padding: 3,
        paddingLeft: 10,
        fontSize: 17,
        color: '#424242'
    },
    footer_text: {
        marginTop: 2,
        marginBottom: 5,
        fontStyle: "italic",
        fontWeight: 500,
        fontSize: 13,
    },
    footer_text2: {
        marginBottom: 2,
        marginTop: 17,
        marginBottom: 10,
        fontStyle: "italic",
        fontWeight: 500,
        fontSize: 15,
    },
    button: {
        borderRadius: 20,
        marginBottom: 7
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
        fontWeight: "bold"
    },
    header_title1: {
        flex: 2,
    },
    error: {
        color: "red",
        fontWeight: "700",
        fontSize: 13
    },
    
});

export default SignupScreen;