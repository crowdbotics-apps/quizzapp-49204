import React, { useState } from "react";
import { View, StyleSheet, TextInput, Text, TouchableOpacity, Alert } from "react-native";

const App = () => {
  const [name, setName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

  const handleSubmit = () => {
    // Use Alert instead of console.log for better compatibility
    Alert.alert("Submitted Information", `Name: ${name}\nDate of Birth: ${dateOfBirth}`);
  };

  return <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} onChangeText={setName} value={name} placeholder="Name" keyboardType="default" />
        <TextInput style={styles.input} onChangeText={setDateOfBirth} value={dateOfBirth} placeholder="Date of Birth" keyboardType="number-pad" // Changed to number-pad
      />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
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
  },
  button: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16
  }
});
export default App;