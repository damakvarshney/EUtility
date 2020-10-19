import React, { useState } from "react";
import AppButton from "./../components/Button";
import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";

const StateScreen = () => {
  const [randomColor, setRandomColor] = useState([]);

  return (
    <View style={styles.container}>
      <AppButton
        title="Add a Color"
        onPress={() => {
          setRandomColor([...randomColor, randomRgb()]);
        }}
      />
      <FlatList
        data={randomColor}
        keyExtractor={(item) => item}
        numColumns={4}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                setRandomColor([...randomColor, randomRgb()]);
              }}
            >
              <View
                style={{
                  width: 100,
                  height: 100,
                  backgroundColor: item,
                }}
              />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red},${green},${blue})`;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: `100%`,
    height: `100%`,
    alignItems: `center`,
  },
});

export default StateScreen;
