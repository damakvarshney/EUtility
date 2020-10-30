import React from "react";
import { View } from "react-native";
import AppButton from "../components/AppButton";

const EditColorSquare = ({ color, onIncrease, onDecrease }) => {
  return (
    <View style={{ backgroundColor: color, width: "100%" }}>
      <AppButton title={`Increase ${color}`} onPress={() => onIncrease()} />
      <AppButton title={`Decrease ${color}`} onPress={() => onDecrease()} />
    </View>
  );
};

export default EditColorSquare;
