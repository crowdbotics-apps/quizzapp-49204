import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput, View, Text, TouchableOpacity } from "react-native";

const App = () => {
  const [name, setName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

  const handleSubmit = () => {
    // Handle the submit action here
    console.log(name, dateOfBirth);
  };

  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Опитування</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>ПІБ:</Text>
        <TextInput style={styles.input} onChangeText={setName} value={name} placeholder="Ваше ПІБ" keyboardType="default" />
        <Text style={styles.label}>Рік народження:</Text>
        <TextInput style={styles.input} onChangeText={setDateOfBirth} value={dateOfBirth} placeholder="Рік народження" keyboardType="numeric" />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>ПРОДОВЖИТИ</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF"
  },
  title: {
    fontSize: 24,
    marginBottom: 40
  },
  inputContainer: {
    width: "80%"
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: "#333333"
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