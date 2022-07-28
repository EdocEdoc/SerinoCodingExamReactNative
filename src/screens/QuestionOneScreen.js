import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState, useEffect } from "react";

const QuestionOneScreen = ({ headerText, children }) => {
  const [clicks, setClicks] = useState(0);

  const clickHandler = () => {
    setClicks(clicks + 1);
  };

  useEffect(() => {
    // removed the event listener for "click"
    // will be using the built in event listener from react native touchable opacity => onPress
    // components will mount
    console.log("components will mount");

    return () => {
      // components will unmount
      console.log("components will unmount");
    };
  }, []);

  return (
    <TouchableOpacity onPress={clickHandler}>
      <Text>My Component ({clicks} clicks)</Text>
      <Text>{headerText}</Text>
      {children}
    </TouchableOpacity>
  );
};

// setting defaults for required component props
QuestionOneScreen.defaultProps = {
  headerText: "Default Header Text",
};

export default QuestionOneScreen;
