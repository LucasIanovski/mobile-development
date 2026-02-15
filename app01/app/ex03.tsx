import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Ex03() {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed
        ]}
      >
        <Text style={styles.buttonText}>Clique Aqui</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  button: {
    backgroundColor: "#6200EE",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",

    // sombra iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,

    // sombra Android
    elevation: 5,
  },
  buttonPressed: {
    opacity: 0.7, // efeito visual ao pressionar
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
