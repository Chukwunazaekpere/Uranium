import React, { useState, useEffect } from "react";
import {
  TextInput,
  Button,
  Image,
  Dimensions,
  View,
  ImageBackground,
  Text,
  StyleSheet,
} from "react-native";
import PropTypes from "prop-types";

import { depositFunds } from "../../../redux/actions/TransactionActions";
import { useDispatch, useSelector } from "react-redux";
import { LogoutUser } from "../../../redux/actions/AuthActions";

import * as Icons from "@expo/vector-icons";


const MakeDeposit = ({ navigation }) => {
    const [depositForm, setFormInput] = useState({
    "Source Account Number": "",
    "Receiving Account Number": "",
    Phone: "",
    Amount: "",
    });
    const [dispatchState, setDispatchState] = useState(false);

    const formFields = Object.keys(depositForm);
    const firstname = useSelector((state) => state.signup.users["Firstname"]);

    const icons = ["bank", "bank", "mobile-phone", "money"]
    const depositFormHandler = (field, value) => {
    let newFormDetails = depositForm;
    newFormDetails[field] = value;
    setFormInput(newFormDetails);
    };

    const dispatch = useDispatch();

    const dispatchDeposit = () => {
    dispatch(depositFunds(depositForm));
    setDispatchState(true);
    };

    let formError = useSelector(state => state.deposit.error );

    useEffect( () => {
    if(formError.length === 0 && dispatchState === true){
        navigation.navigate("TransactionActivityInfo", {status: true});
    }
    });

    return (
    <View style={styles.container}>
        <View style={styles.header}>
        <Text style={styles.header_title}>Uranium Bank - {firstname}</Text>
        </View>
        <View style={styles.footer}>
        <Text style={styles.form_title}>
            Funds Deposit are easier than ever...
        </Text>
        <Text style={styles.error}>{formError}</Text>
        <View style={styles.form}>
            {formFields.map((field, index) => (
            <View style={styles.inputContainer} key={field}>
                <Icons.FontAwesome style={styles.icon} name={icons[index]} size={20} />
                <TextInput
                onChangeText={(value) => depositFormHandler(field, value)}
                style={styles.inputFields}
                placeholder={field}
                ></TextInput>
            </View>
            ))}
        </View>
        <View style={styles.footerComponents}>
            <Text style={styles.footer_text} color="tomato">
                {firstname}, ensure you review the details before pressing the "Send"
                button.
            </Text>
            <View style={styles.btnGroup}>
                <View style={styles.button}>
                <Button
                    color="tomato"
                    title="Back"
                    onPress={() => navigation.navigate("Dashboard")}
                />
                </View>
                <View style={styles.button}>
                <Button
                    color="cornflowerblue"
                    title="Deposit"
                    onPress={() => dispatchDeposit()}
                />
                </View>
            </View>
            <Text
                style={styles.footer_text2}
                color="tomato"
                onPress={() => dispatch(LogoutUser(firstname))}
            >
                Log out
            </Text>
        </View>
        </View>
    </View>
    );
};

MakeDeposit.propTypes = {
  navigation: PropTypes.object,
};
const { height } = Dimensions.get("screen");
const logoHeight = height * 0.28;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "tomato",
    },
    header: {
        flex: 1,
        marginBottom: 5,
        paddingHorizontal: 10,

    },
    footer: {
        flex: 3,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: "#eee",
    },
    btnGroup: {
        flex: 1,
        justifyContent: "space-between",
        flexDirection: "row",
        marginBottom: 15,
        marginTop: 10,
        backgroundColor: "#eee",
        
    },
    form: {
        marginBottom: 2,
        backgroundColor: "#eee",
    },
    inputContainer: {
        flex: 1,
        flexDirection: "row",
        borderWidth: 3,
        marginTop: 2,
        marginBottom: 3,
        borderRadius: 7,
        backgroundColor: "#eee",
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
        color: '#424242',
        backgroundColor: "#eee",
    },
    footer_text: {
        marginTop: 2,
        marginBottom: 5,
        fontStyle: "italic",
        fontWeight: 500,
        fontSize: 13,
    },
    footer_text2: {
        flex: 1,
        marginBottom: 20,
        marginTop: 10,
        fontStyle: "italic",
        fontWeight: 500,
        fontSize: 15,
        color: "blue"
    },
    button: {
        borderRadius: 20,
        marginBottom: 7,
        backgroundColor: "#eee",
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
        fontSize: 27,
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
    footerComponents: {
        flex: 1,
        backgroundColor: "#eee",
        marginTop: 15,
        marginBottom: 20
    }
});


export default MakeDeposit;
