import React from "react";
import {
  View,
  StyleSheet,
  PanResponder,
  Animated,
  Dimensions,
  LayoutAnimation,
  UIManager,
  ScrollView,
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

    this.state = { count: 0 };
    this.position = new Animated.ValueXY();
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

  componentDidMount() {
    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true);
    LayoutAnimation.easeInEaseOut();
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

    const item = data[this.state.count];

    direction === "RIGHT" ? onSwipeRight(item) : onSwipeLeft(item);
    //once card is gone we need to reset the position for the new card
    // console.log("It came back!");
    this.position.setValue({ x: 0, y: 0 });
    this.setState({ count: this.state.count + 1 });
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
    if (this.state.count >= this.props.data.length) {
      return this.props.renderNoMoreCards();
    }

    return this.props.data
      .map((item, index) => {
        // console.log(index);
        if (index < this.state.count) {
          return null;
        }
        if (index === this.state.count) {
          return (
            <Animated.View
              key={item.id}
              style={[this.getCardStyle(), styles.cardView]}
              {...this.panResponder.panHandlers}
            >
              {this.props.renderCard(item)}
            </Animated.View>
          );
        }

        return (
          <Animated.View style={[styles.cardView, { top: index * 10 }]}>
            {this.props.renderCard(item)}
          </Animated.View>
        );
      })
      .reverse();
  }

  render() {
    return <View>{this.renderCard()}</View>;
  }
}

const styles = StyleSheet.create({
  cardView: {
    position: "absolute",
    width: SCREEN_WIDTH,
  },
});

export default Deck;
