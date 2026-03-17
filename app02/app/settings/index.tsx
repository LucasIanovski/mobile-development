import { router } from "expo-router";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Settings() {
  return (
    <View style={styles.container}>

      <Ionicons name="settings-outline" size={60} color="#2563EB" />

      <Text style={styles.title}>Settings</Text>

      <Text style={styles.subtitle}>
        Manage your preferences and application settings.
      </Text>

      <Pressable
        style={styles.button}
        onPress={() => router.push("/dashboard")}
      >
        <Text style={styles.buttonText}>Back to Dashboard</Text>
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
    marginTop: 20
  },

  subtitle: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 8,
    marginBottom: 30,
    textAlign: "center"
  },

  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#2563EB",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center"
  },

  buttonText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 16
  }

});