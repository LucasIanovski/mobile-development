import { StyleSheet, Text, View, Pressable } from "react-native";

export default function Notifications() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notificações</Text>

      {/* FILTERS */}
      <View style={styles.filters}>
        <Chip active text="Tudo" />
        <Chip text="Nova" />
        <Chip text="Resolvida" />
        <Chip text="Cancelada" />
      </View>

      {/* CARD */}
      <View style={styles.card}>
        <Text style={styles.badge}>NOVA</Text>
        <Text style={styles.text}>Revisão de Projeto</Text>

        <View style={styles.actions}>
          <Btn text="Lida" gray />
          <Btn text="Resolvida" blue />
          <Btn text="Cancelar" red />
        </View>
      </View>

      {/* FAB */}
      <View style={styles.fab}>
        <Text style={{ color: "#FFF", fontSize: 20 }}>+</Text>
      </View>
    </View>
  );
}

function Chip({ text, active }: any) {
  return (
    <View
      style={[
        styles.chip,
        { backgroundColor: active ? "#2563EB" : "#E2E8F0" },
      ]}
    >
      <Text style={{ color: active ? "#FFF" : "#000" }}>{text}</Text>
    </View>
  );
}

function Btn({ text, blue, red, gray }: any) {
  return (
    <Pressable
      style={[
        styles.btn,
        {
          backgroundColor: blue
            ? "#2563EB"
            : red
            ? "#EF4444"
            : "#E2E8F0",
        },
      ]}
    >
      <Text style={{ color: blue || red ? "#FFF" : "#000" }}>
        {text}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },

  title: { fontSize: 22, fontWeight: "bold" },

  filters: {
    flexDirection: "row",
    marginVertical: 10,
  },

  chip: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10,
    marginRight: 5,
  },

  card: {
    backgroundColor: "#FFF",
    padding: 16,
    borderRadius: 12,
    marginTop: 10,
  },

  badge: {
    backgroundColor: "#2563EB",
    color: "#FFF",
    paddingHorizontal: 8,
    borderRadius: 6,
    alignSelf: "flex-start",
    marginBottom: 5,
  },

  text: { marginBottom: 10 },

  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  btn: {
    padding: 8,
    borderRadius: 6,
  },

  fab: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#2563EB",
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
});