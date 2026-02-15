import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const produtos = [
  { id: "1", nome: "Notebook Dell XPS 13" },
  { id: "2", nome: "Smartphone Samsung Galaxy S23" },
  { id: "3", nome: "Fones de Ouvido Bluetooth Sony" },
  { id: "4", nome: "Monitor LG UltraWide 29\"" },
  { id: "5", nome: "Teclado Mecânico HyperX" },
  { id: "6", nome: "Mouse Gamer Logitech G502" },
  { id: "7", nome: "Cadeira Gamer ThunderX3" },
  { id: "8", nome: "Smartwatch Apple Watch Series 9" },
  { id: "9", nome: "Tablet iPad Air" },
  { id: "10", nome: "SSD NVMe Kingston 1TB" },
];

export default function Ex04() {
  return (
    <View style={styles.container}>
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item.nome}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  item: {
    backgroundColor: "#007AFF",
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  itemText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
