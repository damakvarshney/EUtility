import { Platform } from "react-native";

import colors from "./colors";

export default {
  colors,
  text: {
    color: colors.dark,
    fontSize: 16,
    padding: 5,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
};
