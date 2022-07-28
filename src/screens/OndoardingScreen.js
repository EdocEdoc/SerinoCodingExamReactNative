import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const OndoardingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.btnOne}
        onPress={() => navigation.navigate("Problem One")}
      >
        <Text style={{ color: "white" }}>Problem Number One</Text>
      </Pressable>
      <Pressable
        style={[styles.btnOne, { backgroundColor: "green" }]}
        onPress={() => navigation.navigate("Problem Two")}
      >
        <Text style={{ color: "white" }}>Problem Number Two</Text>
      </Pressable>
    </View>
  );
};

export default OndoardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  btnOne: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
    marginTop: 20,
  },
});
