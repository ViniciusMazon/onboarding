import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SingIn() {
  async function handlerClearStorage() {
    await AsyncStorage.removeItem("@Onboarding:alreadyLaunched");
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlerClearStorage} style={styles.button}>
        <Text style={styles.buttonText}>Limpar AsyncStorage</Text>
      </TouchableOpacity>

      <Text style={styles.description}>
        Após limpar o AsyncStorage, reinicie o App
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 200,
    height: 60,
    backgroundColor: "#196BE7",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  description: {
    color: "#666",
    fontSize: 16,
    marginTop: 30,
    fontWeight: "bold",
  },
});
