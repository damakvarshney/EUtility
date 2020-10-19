import React from "react";
import { View, StyleSheet, Animated } from "react-native";
import colors from "../config/colors";

class ElementMove extends React.Component {
  constructor(props) {
    super(props);
    this.moveAnim = new Animated.ValueXY(0, 0);
    this.moveBall();
  }

  moveBall() {
    Animated.spring(this.moveAnim, {
      toValue: { x: 200, y: 500 },
      useNativeDriver: false,
    }).start();
  }

  render() {
    return (
      <Animated.View style={this.moveAnim.getLayout()}>
        <View style={styles.ball} />
      </Animated.View>
    );
  }
}
const styles = StyleSheet.create({
  ball: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: colors.PowderBlue,
  },
});

export default ElementMove;
