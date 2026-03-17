import { router } from "expo-router";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Dashboard() {
  return (
    <View style={styles.container}>

      {/* Header */}
      <Text style={styles.title}>Dashboard</Text>
      <Text style={styles.subtitle}>Welcome to your control panel</Text>

      {/* Cards */}
      <View style={styles.cardContainer}>

        <View style={styles.card}>
          <Ionicons name="notifications-outline" size={28} color="#2563EB" />
          <Text style={styles.cardTitle}>Notifications</Text>
          <Text style={styles.cardNumber}>12</Text>
        </View>

        <View style={styles.card}>
          <Ionicons name="settings-outline" size={28} color="#2563EB" />
          <Text style={styles.cardTitle}>Settings</Text>
          <Text style={styles.cardNumber}>3</Text>
        </View>

      </View>

      {/* Botões */}
      <Pressable
        style={styles.button}
        onPress={() => router.push("/notifications")}
      >
        <Text style={styles.buttonText}>View Notifications</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => router.push("/settings")}
      >
        <Text style={styles.buttonText}>Open Settings</Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F5F7FB",
    alignItems: "center",
    justifyContent: "center",
    padding: 24
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 6
  },

  subtitle: {
    fontSize: 14,
    color: "#6B7280",
    marginBottom: 30
  },

  cardContainer: {
    flexDirection: "row",
    gap: 20,
    marginBottom: 30
  },

  card: {
    width: 140,
    height: 120,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E5E7EB"
  },

  cardTitle: {
    marginTop: 10,
    fontWeight: "600"
  },

  cardNumber: {
    fontSize: 20,
    fontWeight: "700",
    color: "#2563EB"
  },

  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#2563EB",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15
  },

  buttonText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 16
  }

});