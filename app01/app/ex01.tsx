import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Ex01() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meu Primeiro App Expo</Text>
      <Text style={styles.subtitle}>
        Construindo interfaces no React Native
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#87CEEB", // Fundo azul claro
    justifyContent: "center",   // Centraliza vertical
    alignItems: "center",       // Centraliza horizontal
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  subtitle: {
    fontSize: 18,
    color: "#f0f0f0",
    marginTop: 10,
  },
});
