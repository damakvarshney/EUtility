import React, { useState } from "react";
import { Text, Input, Button } from "react-native-elements";
import AppView from "./AppView";
import axios from "axios";

const SignUpForm = ({ navigation }) => {
  const ROOT_URL =
    "https://us-central1-one-time-password-98b67.cloudfunctions.net";
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async () => {
    if (phone !== "") {
      try {
        await axios.post(`${ROOT_URL}/createUser`, {
          phone: phone,
        });

        await axios.post(`${ROOT_URL}/requestOneTimePassword`, {
          phone: phone,
        });
      } catch (error) {
        console.log(error);
        setError("Something went wrong.");
      }
      //phone in params to send no. in signIn and intentionally navigating
      navigation.replace("SignIn", { phone: phone });
    } else {
      setError("Phone Number Empty.");
    }
  };
  return (
    <AppView style={{ paddingTop: 100 }}>
      <Text style={{ fontSize: 50, fontWeight: "bold", marginBottom: 100 }}>
        Sign Up{" "}
      </Text>
      <Text style={{ color: "#FF0000" }}>{error}</Text>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>
        Enter Phone Number :
      </Text>
      <Input
        keyboardType="phone-pad"
        value={phone}
        onChangeText={(text) => setPhone(text)}
      />
      <Button title="Submit" onPress={() => handleSubmit()} />
    </AppView>
  );
};

export default SignUpForm;
