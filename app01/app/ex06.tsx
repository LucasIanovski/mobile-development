import React from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";

export default function Ex06() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Explorando o Universo</Text>

      <View style={styles.bloco}>
        <Text style={styles.texto}>
          O universo é vasto e misterioso, repleto de galáxias, estrelas e planetas ainda desconhecidos.
        </Text>
        <Image source={{ uri: "https://placehold.co/300" }} style={styles.imagem} />
      </View>

      <View style={styles.bloco}>
        <Text style={styles.texto}>
          Cientistas estudam o espaço há séculos, utilizando telescópios e sondas espaciais.
        </Text>
        <Image source={{ uri: "https://placehold.co/300" }} style={styles.imagem} />
      </View>

      <View style={styles.bloco}>
        <Text style={styles.texto}>
          A exploração espacial tem revelado segredos incríveis sobre a origem do universo.
        </Text>
        <Image source={{ uri: "https://placehold.co/300" }} style={styles.imagem} />
      </View>

      <View style={styles.bloco}>
        <Text style={styles.texto}>
          O futuro pode nos levar para Marte e além, com novas tecnologias e descobertas.
        </Text>
        <Image source={{ uri: "https://placehold.co/300" }} style={styles.imagem} />
      </View>

      <Text style={styles.rodape}>Fim da exploração</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  bloco: {
    marginBottom: 20,
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  texto: {
    fontSize: 16,
    marginBottom: 10,
    color: "#555",
  },
  imagem: {
    width: "100%",
    height: 150,
    borderRadius: 10,
  },
  rodape: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 20,
    color: "#666",
  },
});
