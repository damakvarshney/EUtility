import React from "react";
import HomeScreen from "./src/screens/HomeScreen";
import StateScreen from "./src/screens/StateScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CustomColor from "./src/screens/CustomColor";
import HorizontalScreen from "./src/screens/HorizontalScreen";
import Animation from "./src/screens/Animation";
import ElementMove from "./src/screens/ElementMove";
import SignUpForm from "./src/components/SignUpForm";
import SignInForm from "./src/components/SignInForm";
import Successful from "./src/components/Successful";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="StateScreen" component={StateScreen} />
        <Stack.Screen name="CustomScreen" component={CustomColor} />
        <Stack.Screen name="HorizontalScreen" component={HorizontalScreen} />
        <Stack.Screen name="AnimationScreen" component={Animation} />
        <Stack.Screen name="BallScreen" component={ElementMove} />
        <Stack.Screen name="SignUp" component={SignUpForm} />
        <Stack.Screen name="SignIn" component={SignInForm} />
        <Stack.Screen name="Success" component={Successful} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
