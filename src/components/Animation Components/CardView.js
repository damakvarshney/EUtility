import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { Card, Button } from "react-native-elements";
import colors from "../../config/colors";

class CardView extends React.Component {
  render() {
    return (
      <Card key={this.props.item.id}>
        <Image
          source={{ uri: this.props.item.uri }}
          style={styles.image}
          tint="dark"
        />
        <Text style={styles.text}>{this.props.item.text}</Text>
        <Text style={{ marginBottom: 10 }}>
          I can customize the card further.
        </Text>
        <Button
          // icon={{ name: "code" }}
          backgroundColor={colors.PowderBlue}
          title="View Now!"
        />
      </Card>
    );
  }
}
const styles = StyleSheet.create({
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
export default CardView;
