import React, { useState } from "react";
import { Text, Input, Button } from "react-native-elements";
import AppView from "./AppView";
import axios from "axios";

const SignInForm = ({ navigation }) => {
  const ROOT_URL =
    "https://us-central1-one-time-password-98b67.cloudfunctions.net";
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async () => {
    if (phone !== "" && code !== "") {
      try {
        await axios.post(`${ROOT_URL}/verifyOneTimePassword `, {
          phone: phone,
          code: code,
        });
        navigation.replace("Success");
      } catch (error) {
        console.log(error);
        setError("Something went wrong.");
      }
    } else {
      setError("Phone Number or Code is Empty.");
    }
  };
  return (
    <AppView style={{ paddingTop: 100 }}>
      <Text style={{ fontSize: 50, fontWeight: "bold", marginBottom: 100 }}>
        Sign In{" "}
      </Text>
      <Text style={{ color: "#FF0000" }}>{error}</Text>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>
        Enter Phone Number :
      </Text>
      <Input
        keyboardType="phone-pad"
        value={phone}
        placeholder="#9324578342"
        onChangeText={(text) => setPhone(text)}
      />
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Enter Code :</Text>
      <Input
        keyboardType="phone-pad"
        value={code}
        placeholder="0000"
        onChangeText={(text) => setCode(text)}
      />
      <Button title="Submit" onPress={() => handleSubmit()} />
    </AppView>
  );
};

export default SignInForm;
