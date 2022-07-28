import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useReducer, useState } from "react";

const todosReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { index: new Date(), name: action.payload }];
    case "REMOVE_TODO":
      return state.filter((item) => item.index != action.payload.index);
    default:
      return state;
  }
};

const QuestionTwoScreen = () => {
  const [toDos, dispatch] = useReducer(todosReducer, []);
  const [toDO, setToDo] = useState("");

  const submit = () => {
    if (toDO) {
      dispatch({ type: "ADD_TODO", payload: toDO });
    }
    console.log(toDos);
    setToDo("");
  };

  const remove = (item) => {
    dispatch({ type: "REMOVE_TODO", payload: item });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {toDos.length > 0 && (
          <Text style={{ marginTop: 10 }}>To DO Items:</Text>
        )}
        <View>
          {toDos.length > 0 ? (
            toDos.map((item, index) => (
              <Pressable key={index} onPress={() => remove(item)}>
                <Text style={[styles.inputTxt, { borderColor: "green" }]}>
                  {item.name}
                </Text>
              </Pressable>
            ))
          ) : (
            <Text>No to Do Item</Text>
          )}
        </View>
        <Text style={{ marginTop: 20 }}>Add To DO Items:</Text>
        <TextInput
          value={toDO}
          onChangeText={setToDo}
          style={styles.inputTxt}
          onSubmitEditing={submit}
        />
        <Pressable style={styles.btnOne} onPress={submit}>
          <Text style={{ color: "white" }}>Add Todo</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default QuestionTwoScreen;

const styles = StyleSheet.create({
  inputTxt: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
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
