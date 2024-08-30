import React, { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";

const App = () => {
  const [name, setName] = useState("");
  return <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} onChangeText={setName} value={name} placeholder="Name" keyboardType="default" />
        
        
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  inputContainer: {
    width: "80%"
  },
  input: {
    height: 50,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    paddingLeft: 10,
    borderRadius: 5
  }
});
export default App;