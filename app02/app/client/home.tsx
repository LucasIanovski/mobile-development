import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.avatar} />
        <View>
          <Text style={styles.hello}>Olá, Bruno</Text>
          <Text style={styles.title}>Dashboard</Text>
        </View>

        <View style={styles.plus}>
          <Ionicons name="add" size={20} color="#FFF" />
        </View>
      </View>

      {/* CARDS */}
      <View style={styles.grid}>
        <Card title="Novas" value="24" extra="+12%" green />
        <Card title="Lidas" value="142" extra="Estável" />
        <Card title="Resolvidas" value="89" extra="+5%" green />
        <Card title="Canceladas" value="7" extra="-2%" red />
      </View>

      {/* GRAPH */}
      <Text style={styles.section}>Distribuição Semanal</Text>
      <View style={styles.chart}>
        {[40, 60, 30, 70, 50, 45, 65].map((h, i) => (
          <View key={i} style={[styles.bar, { height: h }]} />
        ))}
      </View>

      {/* LIST */}
      <Text style={styles.section}>Atualizações Recentes</Text>

      <Item text="Revisão de contrato pendente" />
      <Item text="Nova tarefa: Design System" />
      <Item text="Relatório mensal enviado" done />
    </ScrollView>
  );
}

function Card({ title, value, extra, green, red }: any) {
  return (
    <View style={styles.card}>
      <Text>{title}</Text>
      <Text style={styles.number}>{value}</Text>
      <Text
        style={{
          color: green ? "#22C55E" : red ? "#EF4444" : "#94A3B8",
        }}
      >
        {extra}
      </Text>
    </View>
  );
}

function Item({ text, done }: any) {
  return (
    <View style={styles.item}>
      <Text>{text}</Text>
      <View
        style={[
          styles.dot,
          { backgroundColor: done ? "#22C55E" : "#2563EB" },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#F8FAFC" },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  avatar: {
    width: 40,
    height: 40,
    backgroundColor: "#CBD5F5",
    borderRadius: 20,
  },

  hello: { color: "#94A3B8" },
  title: { fontSize: 20, fontWeight: "bold" },

  plus: {
    backgroundColor: "#2563EB",
    padding: 10,
    borderRadius: 10,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 10,
  },

  card: {
    width: "48%",
    backgroundColor: "#FFF",
    padding: 16,
    borderRadius: 12,
    marginBottom: 10,
    elevation: 2,
  },

  number: { fontSize: 22, fontWeight: "bold" },

  section: { marginTop: 20, fontWeight: "bold" },

  chart: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 100,
    alignItems: "flex-end",
  },

  bar: {
    width: 12,
    backgroundColor: "#2563EB",
    borderRadius: 4,
  },

  item: {
    backgroundColor: "#FFF",
    padding: 16,
    borderRadius: 10,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
});