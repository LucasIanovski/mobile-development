import React from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";

export default function Ex05() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Login</Text>

      <TextInput 
        style={styles.input} 
        placeholder="E-mail" 
        keyboardType="email-address"
      />

      <TextInput 
        style={styles.input} 
        placeholder="Senha" 
        secureTextEntry 
      />

      <Pressable style={styles.botao}>
        <Text style={styles.botaoTexto}>Entrar</Text>
      </Pressable>

      <Text style={styles.link}>Esqueci minha senha</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  input: {
    width: "100%",
    padding: 15,
    marginBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  botao: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    width: "100%",
    marginTop: 10,
  },
  botaoTexto: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  link: {
    marginTop: 15,
    color: "#007AFF",
    fontSize: 14,
  },
});
