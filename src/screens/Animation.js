import React, { Component } from "react";
import { View, StyleSheet, Text, Animated, Image } from "react-native";
import { Card, Button } from "react-native-elements";
import colors from "../config/colors";
import Deck from "./../components/Deck";

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
    return (
      <Card key={item.id}>
        <Image source={{ uri: item.uri }} style={styles.image} />
        <Text style={styles.text}>{item.text}</Text>
        <Text style={{ marginBottom: 10 }}>
          I can customize the card further.
        </Text>
        <Button
          icon={{ name: "code" }}
          backgroundColor={colors.PowderBlue}
          title="View Now!"
        />
      </Card>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Deck data={DATA} renderCard={this.renderCard} />
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
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
});

export default Animation;
