import React from "react";
import { View, StyleSheet, Text, StatusBar } from "react-native";
import {} from "expo-status-bar";

const AppView = ({ children, style }) => {
  return <View style={[styles.container, style]}>{children}</View>;
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    marginTop: StatusBar.currentHeight,
  },
});

export default AppView;
