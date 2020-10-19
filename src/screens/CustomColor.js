import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";

import EditColorSquare from "../components/EditColorSquare";

const CustomColor = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  return (
    <View style={styles.container}>
      <EditColorSquare
        color="red"
        onIncrease={() => setRed(red + 20)}
        onDecrease={() => setRed(red - 20)}
      />
      <EditColorSquare
        color="green"
        onIncrease={() => setGreen(green + 20)}
        onDecrease={() => setGreen(green - 20)}
      />
      <EditColorSquare
        color="blue"
        onIncrease={() => setBlue(blue + 20)}
        onDecrease={() => setBlue(blue - 20)}
      />
      <View
        style={{
          width: "100%",
          height: 200,
          backgroundColor: `rgb(${0 < red < 255 ? red : null},${
            0 < green < 255 ? green : null
          },${0 < blue < 255 ? blue : null})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: `100%`,
    height: `100%`,
    justifyContent: "flex-start",
    alignItems: `center`,
  },
});

export default CustomColor;
