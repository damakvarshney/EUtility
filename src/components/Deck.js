import React from "react";
import {
  View,
  StyleSheet,
  PanResponder,
  Animated,
  Dimensions,
} from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SWIPE_THRESHOLD = SCREEN_WIDTH * 0.5;
const SWIPE_OUT_DURATION = 250;

class Deck extends React.Component {
  static defaultProps = {
    onSwipeRight: () => {},
    onSwipeLeft: () => {},
  };
  constructor(props) {
    super(props);

    this.state = { index: 0 };
    this.position = new Animated.ValueXY(0, 0);
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,

      onPanResponderMove: (event, gestureState) => {
        this.position.setValue({
          x: gestureState.dx,
          y: gestureState.dy,
        });
      },

      onPanResponderRelease: (event, gestureState) => {
        if (gestureState.dx > SWIPE_THRESHOLD) {
          this.forceSwipe("RIGHT");
        } else if (gestureState.dx < -SWIPE_THRESHOLD) {
          this.forceSwipe("LEFT");
        } else {
          this.resetPosition();
        }
      },
    });
  }

  //direction specifies the different actions
  forceSwipe(direction) {
    const x = direction === "RIGHT" ? SCREEN_WIDTH * 2 : -SCREEN_WIDTH * 2;
    Animated.timing(this.position, {
      toValue: { x: x, y: 0 },
      duration: SWIPE_OUT_DURATION,
      useNativeDriver: false,
    }).start(() => this.onSwipeComplete(direction));
  }

  onSwipeComplete(direction) {
    const { onSwipeLeft, onSwipeRight, data } = this.props;

    const item = data[this.state.index];

    direction === "RIGHT" ? onSwipeRight(item) : onSwipeLeft(item);
  }

  resetPosition() {
    Animated.spring(this.position, {
      toValue: { x: 0, y: 0 },
      useNativeDriver: false,
    }).start();
  }

  getCardStyle() {
    const rotate = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 2.0, 0, SCREEN_WIDTH * 2.0],
      outputRange: ["-120deg", "0deg", "120deg"],
    });
    return {
      ...this.position.getLayout(),
      transform: [{ rotate }],
    };
  }

  renderCard() {
    return this.props.data.map((item, index) => {
      if (index === 0) {
        return (
          <Animated.View
            key={item.id}
            style={this.getCardStyle()}
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
