import React from "react";
import { Image } from "react-native";
import { View, StyleSheet, Text } from "react-native";

const Successful = () => {
  return (
    <Image
      source={require("../../assets/Success.png")}
      style={styles.container}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: "cover",
  },
});

export default Successful;
