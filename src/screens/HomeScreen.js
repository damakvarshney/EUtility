import React from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { AppLoading } from "expo";
import { useFonts } from "expo-font";
import colors from "../config/colors";

import AppText from "./../components/Text";

const HomeScreen = ({ navigation }) => {
  const data = [
    { name: "Add a Color", targetScreen: "StateScreen" },
    { name: "Customize your color", targetScreen: "CustomScreen" },
    { name: "Horizontal Slider", targetScreen: "HorizontalScreen" },
    { name: "Animations", targetScreen: "AnimationScreen" },
    { name: "Ball Move", targetScreen: "BallScreen" },
  ];

  let [fontsLoaded] = useFonts({
    "Inter-Black": require("../assets/fonts/ComicNeue-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <View style={styles.container}>
          <AppText style={styles.heading}>Utility</AppText>
          <AppText style={styles.text}>
            Here, Utility preserves many different type of reusable components
            and ensure their workings.
          </AppText>
          <View style={styles.flatListContainer}>
            <AppText style={[styles.text, { fontWeight: "bold" }]}>
              Navigator to different Components :
            </AppText>

            <FlatList
              data={data}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    onPress={() => navigation.navigate(item.targetScreen)}
                  >
                    <View style={styles.listView}>
                      <AppText style={styles.text}>{item.name}</AppText>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>
      </>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    padding: 20,
    marginTop: 10,
  },
  flatListContainer: {
    flex: 1,
  },
  listView: {
    width: "100%",

    alignSelf: "center",
    backgroundColor: colors.PowderBlue,
    marginTop: 5,
    marginLeft: 5,
    borderRadius: 5,
    paddingHorizontal: 5,
  },
  heading: {
    fontSize: 60,
    fontWeight: "bold",
    color: colors.black,
    textAlign: "left",
  },
  text: {
    fontSize: 14,
    color: colors.black,
    textAlign: "left",
    paddingVertical: 10,
  },
});

export default HomeScreen;
