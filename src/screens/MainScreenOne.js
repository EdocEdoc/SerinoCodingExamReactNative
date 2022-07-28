import { StyleSheet, Text, View } from "react-native";
import React from "react";
import QuestionOneScreen from "./QuestionOneScreen";

const MainScreenOne = () => {
  return (
    <View style={styles.container}>
      <QuestionOneScreen children={<Text>Passed competent via props</Text>} />
    </View>
  );
};

export default MainScreenOne;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
