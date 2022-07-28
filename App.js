import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import QuestionOneScreen from "./src/screens/QuestionOneScreen";
import AppStack from "./src/navigation/AppStack";

export default function App() {
  return <AppStack />;
}
