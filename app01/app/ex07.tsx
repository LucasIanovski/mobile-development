import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// Lista de aplicativos simulados
const apps = [
  { id: "1", nome: "Mensagens", icone: "chatbubble-outline" },
  { id: "2", nome: "Câmera", icone: "camera-outline" },
  { id: "3", nome: "Galeria", icone: "images-outline" },
  { id: "4", nome: "Música", icone: "musical-notes-outline" },
  { id: "5", nome: "Navegador", icone: "globe-outline" },
  { id: "6", nome: "Configurações", icone: "settings-outline" },
];

export default function Ex07() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Meus Aplicativos</Text>

      <FlatList
        data={apps}
        keyExtractor={(item) => item.id}
        numColumns={3} // transforma em GRID
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.appContainer}>
            <View style={styles.iconeContainer}>
              <Ionicons name={item.icone as any} size={40} color="#fff" />
            </View>

            <Text style={styles.texto}>{item.nome}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: 40,
    alignItems: "center",
  },

  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },

  appContainer: {
    alignItems: "center",
    margin: 15,
  },

  iconeContainer: {
    width: 70,
    height: 70,
    borderRadius: 35, // deixa redondo
    backgroundColor: "#4CAF50",
    justifyContent: "center",
    alignItems: "center",
  },

  texto: {
    marginTop: 5,
    fontSize: 14,
    color: "#333",
  },
});
