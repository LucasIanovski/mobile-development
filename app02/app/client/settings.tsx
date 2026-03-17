import { useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";

export default function Settings() {
  const [push, setPush] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurações</Text>

      {/* PROFILE */}
      <View style={styles.profile}>
        <View style={styles.avatar} />
        <View>
          <Text style={{ fontWeight: "bold" }}>Lucas Silva</Text>
          <Text style={{ color: "#94A3B8" }}>lucas.silva@example.com</Text>
        </View>
      </View>

      {/* PASSWORD */}
      <View style={styles.card}>
        <Text style={styles.subtitle}>Trocar Senha</Text>

        <View style={styles.input} />
        <View style={styles.input} />
        <View style={styles.input} />

        <View style={styles.button}>
          <Text style={{ color: "#FFF" }}>Atualizar Senha</Text>
        </View>
      </View>

      {/* PREF */}
      <View style={styles.card}>
        <View style={styles.row}>
          <Text>Notificações Push</Text>
          <Switch value={push} onValueChange={setPush} />
        </View>

        <View style={styles.row}>
          <Text>Modo Escuro</Text>
          <Switch />
        </View>
      </View>

      <Text style={styles.logout}>Sair da Conta</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#F8FAFC" },

  title: { fontSize: 22, fontWeight: "bold" },

  profile: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
  },

  avatar: {
    width: 50,
    height: 50,
    backgroundColor: "#CBD5F5",
    borderRadius: 25,
    marginRight: 10,
  },

  card: {
    backgroundColor: "#FFF",
    padding: 16,
    borderRadius: 12,
    marginTop: 10,
  },

  subtitle: { fontWeight: "bold", marginBottom: 10 },

  input: {
    backgroundColor: "#F1F5F9",
    height: 40,
    borderRadius: 8,
    marginBottom: 10,
  },

  button: {
    backgroundColor: "#2563EB",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },

  logout: {
    textAlign: "center",
    color: "#EF4444",
    marginTop: 20,
  },
});
