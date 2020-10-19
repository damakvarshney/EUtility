import React from "react";
import { View, StyleSheet, Text, ScrollView, Dimensions } from "react-native";
import {
  PagerTabIndicator,
  IndicatorViewPager,
  PagerTitleIndicator,
  PagerDotIndicator,
} from "@react-native-community/viewpager";

const HorizontalScreen = () => {
  return (
    <ScrollView style={styles.container} horizontal pagingEnabled>
      <View style={styles.outer}>
        <Text style={styles.innerText}>Welcome to LCO App</Text>
        <Text></Text>
      </View>
      <View style={[styles.outer, styles.red]}>
        <Text style={styles.innerText}>Welcome to LCO App</Text>
      </View>
      <View style={styles.outer}>
        <Text style={styles.innerText}>Welcome to LCO App</Text>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E44236",
    flex: 1,
  },
  outer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1e90ff",
    width: Dimensions.get("window").width,
    height: "90%",
  },
  innerText: { color: "#ffffff", fontWeight: "bold", fontSize: 24 },
  externalText: {
    position: "absolute",
    bottom: 2,
  },
  red: {
    backgroundColor: "#000000",
  },
});

export default HorizontalScreen;
