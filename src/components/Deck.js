import React from "react";
import { View, StyleSheet, PanResponder, Animated } from "react-native";

class Deck extends React.Component {
  constructor(props) {
    super(props);
    //this.position
    //this.panResponder
    this.position = new Animated.ValueXY(0, 0);
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gestureState) => {
        this.position.setValue({ x: gestureState.dx, y: gestureState.dy });
      },
      onPanResponderRelease: () => {},
    });

    // this.state = { panResponder, position };
  }
  renderCard() {
    return this.props.data.map((item, index) => {
      if (index === 0) {
        return (
          <Animated.View
            key={item.id}
            style={this.position.getLayout()}
            {...this.panResponder.panHandlers}
          >
            {this.props.renderCard(item)}
          </Animated.View>
        );
      }

      return this.props.renderCard(item);
    });
  }

  render() {
    return <View>{this.renderCard()}</View>;
  }
}

export default Deck;
