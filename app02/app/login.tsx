import { router } from "expo-router";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Login() {
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={20} />
        <Text style={styles.headerTitle}>Login</Text>
      </View>

      {/* ICON */}
      <View style={styles.iconBox}>
        <Ionicons name="notifications" size={28} color="#2563EB" />
      </View>

      <Text style={styles.title}>Welcome Back</Text>
      <Text style={styles.subtitle}>
        Stay on top of your tasks and notifications.
      </Text>

      <Text style={styles.label}>Email</Text>
      <TextInput placeholder="Enter your email" style={styles.input} />

      <Text style={styles.label}>Password</Text>
      <View style={styles.inputIcon}>
        <TextInput
          placeholder="Enter your password"
          secureTextEntry
          style={{ flex: 1 }}
        />
        <Ionicons name="eye-outline" size={18} color="#94A3B8" />
      </View>

      <Text style={styles.forgot}>Forgot Password?</Text>

      <Pressable
        style={styles.button}
        onPress={() => router.push("/client/home")}
      >
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>

      <Text style={styles.or}>OR CONTINUE WITH</Text>

      <View style={styles.socialRow}>
        <View style={styles.socialBtn}>
          <Ionicons name="logo-google" size={16} />
          <Text> Google</Text>
        </View>
        <View style={styles.socialBtn}>
          <Ionicons name="logo-apple" size={16} />
          <Text> Apple</Text>
        </View>
      </View>

      <Text style={styles.signup}>
        Don't have an account? <Text style={{ color: "#2563EB" }}>Sign Up</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#F8FAFC" },

  header: { flexDirection: "row", alignItems: "center" },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
  },

  iconBox: {
    alignSelf: "center",
    backgroundColor: "#E0E7FF",
    padding: 20,
    borderRadius: 16,
    marginVertical: 20,
  },

  title: { fontSize: 26, fontWeight: "bold", textAlign: "center" },

  subtitle: {
    textAlign: "center",
    color: "#94A3B8",
    marginBottom: 20,
  },

  label: { marginBottom: 5, fontWeight: "500" },

  input: {
    backgroundColor: "#FFF",
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    marginBottom: 10,
  },

  inputIcon: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    paddingHorizontal: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    marginBottom: 10,
  },

  forgot: {
    textAlign: "right",
    color: "#2563EB",
    marginBottom: 15,
  },

  button: {
    backgroundColor: "#2563EB",
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
  },

  buttonText: { color: "#FFF", fontWeight: "bold" },

  or: {
    textAlign: "center",
    marginVertical: 15,
    color: "#94A3B8",
  },

  socialRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  socialBtn: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    padding: 12,
    backgroundColor: "#FFF",
    borderRadius: 12,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },

  signup: { textAlign: "center", marginTop: 20 },
});