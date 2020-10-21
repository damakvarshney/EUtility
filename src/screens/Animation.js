import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import CardView from "../components/Animation Components/CardView";
import colors from "../config/colors";
import Deck from "./../components/Deck";
import { Card, Text, Button } from "react-native-elements";

const DATA = [
  {
    id: 1,
    text: "Card #1",
    uri: "https://pixabay.com/photos/color-pop-fish-tail-red-red-fish-5650322/",
  },
  {
    id: 2,
    text: "Card #2",
    uri: "https://pixabay.com/photos/house-beach-coast-sand-coastline-5651866/",
  },
  {
    id: 3,
    text: "Card #3",
    uri: "https://pixabay.com/photos/canal-boats-buildings-reflection-5488271/",
  },
  {
    id: 4,
    text: "Card #4",
    uri: "https://pixabay.com/photos/dome-skyline-cityscape-urban-5622133/",
  },
  {
    id: 5,
    text: "Card #5",
    uri:
      "https://pixabay.com/photos/train-railway-station-train-station-5638568/",
  },
  {
    id: 6,
    text: "Card #6",
    uri: "https://pixabay.com/photos/travel-hot-air-balloon-aviation-1756150/",
  },
  {
    id: 7,
    text: "Card #7",
    uri: "https://pixabay.com/photos/gallery-art-mural-baroque-3114279/",
  },
  {
    id: 8,
    text: "Card #8",
    uri: "https://pixabay.com/photos/camera-photos-photograph-514992/",
  },
];

class Animation extends Component {
  renderCard(item) {
    return <CardView key={item.id} item={item} />;
  }

  renderNoMoreCards() {
    return (
      <Card>
        <Text style={styles.text}>All Done!</Text>
        <Text style={{ marginBottom: 10 }}>No More Cards Available.</Text>
        <Button title="Get More!" backgroundColor={colors.PowderBlue} />
      </Card>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Deck
          data={DATA}
          renderCard={this.renderCard}
          onSwipeRight={() => console.log("Swiped Right")}
          onSwipeLeft={() => console.log("Swiped Left")}
          renderNoMoreCards={this.renderNoMoreCards}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Animation;
