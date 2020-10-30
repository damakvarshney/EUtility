import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import CardView from "../components/Animation Components/CardView";
import colors from "../config/colors";
import Deck from "./../components/Deck";
import { Card, Text, Button } from "react-native-elements";

const DATA = [
  {
    id: 0,
    text: "Card #0",
    uri:
      "https://cdn.pixabay.com/photo/2018/01/28/17/48/gallery-3114279_960_720.jpg",
  },
  {
    id: 1,
    text: "Card #1",
    uri:
      "https://cdn.pixabay.com/photo/2016/07/01/23/16/amusement-park-1492099_960_720.jpg",
  },
  {
    id: 2,
    text: "Card #2",
    uri:
      "https://cdn.pixabay.com/photo/2020/10/18/18/42/bulb-5665770_960_720.jpg",
  },
  {
    id: 3,
    text: "Card #3",
    uri:
      "https://cdn.pixabay.com/photo/2020/07/24/08/07/architecture-5433221_960_720.jpg",
  },
  {
    id: 4,
    text: "Card #4",
    uri:
      "https://cdn.pixabay.com/photo/2020/10/23/21/13/china-town-5679982_960_720.jpg",
  },
  {
    id: 5,
    text: "Card #5",
    uri:
      "https://cdn.pixabay.com/photo/2016/12/11/12/42/canada-1899328_960_720.jpg",
  },
  {
    id: 6,
    text: "Card #6",
    uri:
      "https://cdn.pixabay.com/photo/2017/09/02/13/21/guggenheim-museum-2707258_960_720.jpg",
  },
  {
    id: 7,
    text: "Card #7",
    uri:
      "https://cdn.pixabay.com/photo/2020/10/18/16/45/porsche-5665390_960_720.jpg",
  },
];

class Animation extends Component {
  renderCard(item) {
    return <CardView id={item.id} item={item} />;
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
