import { router } from "expo-router";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";

export default function Login() {
  return (
    <View style={styles.container}>
      
      {/* Ícone superior */}
      <View style={styles.iconBox}>
        <Ionicons name="notifications-outline" size={32} color="#2563EB" />
      </View>

      {/* Título */}
      <Text style={styles.title}>Welcome Back</Text>

      {/* Subtítulo */}
      <Text style={styles.subtitle}>
        Stay on top of your tasks and notifications.
      </Text>

      {/* Campo Email */}
      <TextInput
        placeholder="Enter your email"
        style={styles.input}
        placeholderTextColor="#9CA3AF"
      />

      {/* Campo Password */}
      <TextInput
        placeholder="Enter your password"
        secureTextEntry
        style={styles.input}
        placeholderTextColor="#9CA3AF"
      />

      {/* Link forgot */}
      <Text style={styles.forgot}>Forgot Password?</Text>

      {/* Botão Login */}
      <Pressable
        style={styles.loginButton}
        onPress={() => router.push("/dashboard")}
      >
        <Text style={styles.loginText}>Login</Text>
      </Pressable>

      {/* Divider */}
      <Text style={styles.divider}>Or continue with</Text>

      {/* Botões sociais */}
      <View style={styles.socialContainer}>
        <Pressable style={styles.socialButton}>
          <AntDesign name="google" size={20} color="#000" />
        </Pressable>

        <Pressable style={styles.socialButton}>
          <AntDesign name="apple1" size={20} color="#000" />
        </Pressable>
      </View>

      {/* Signup */}
      <Text style={styles.signup}>
        Don’t have an account? <Text style={styles.signupLink}>Sign Up</Text>
      </Text>

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

  iconBox: {
    backgroundColor: "#E8EEFF",
    padding: 18,
    borderRadius: 16,
    marginBottom: 20
  },

  title: {
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 6
  },

  subtitle: {
    fontSize: 14,
    color: "#6B7280",
    textAlign: "center",
    marginBottom: 30
  },

  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#E5E7EB"
  },

  forgot: {
    alignSelf: "flex-end",
    color: "#2563EB",
    marginBottom: 20
  },

  loginButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#2563EB",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20
  },

  loginText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 16
  },

  divider: {
    color: "#6B7280",
    marginBottom: 15
  },

  socialContainer: {
    flexDirection: "row",
    gap: 15,
    marginBottom: 25
  },

  socialButton: {
    width: 60,
    height: 45,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E5E7EB"
  },

  signup: {
    color: "#6B7280"
  },

  signupLink: {
    color: "#2563EB",
    fontWeight: "600"
  }

});