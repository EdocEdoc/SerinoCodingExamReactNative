import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import OndoardingScreen from "../screens/OndoardingScreen";
import MainScreenOne from "../screens/MainScreenOne";
import QuestionTwoScreen from "../screens/QuestionTwoScreen";

const Stack = createStackNavigator();
const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen
          name="React Native Tech Exam"
          component={OndoardingScreen}
        />
        <Stack.Screen name="Problem One" component={MainScreenOne} />
        <Stack.Screen name="Problem Two" component={QuestionTwoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
