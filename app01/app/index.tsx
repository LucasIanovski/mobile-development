import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Home() {
    const goTo = (route: string) => router.push(route as any);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Exercícios React Native</Text>

            <Pressable style={styles.button} onPress={() => goTo("/ex01")}>
                <Text style={styles.buttonText}>Exercício 01</Text>
            </Pressable>

            <Pressable style={styles.button} onPress={() => goTo("/ex02")}>
                <Text style={styles.buttonText}>Exercício 02</Text>
            </Pressable>

            <Pressable style={styles.button} onPress={() => goTo("/ex03")}>
                <Text style={styles.buttonText}>Exercício 03</Text>
            </Pressable>

            <Pressable style={styles.button} onPress={() => goTo("/ex04")}>
                <Text style={styles.buttonText}>Exercício 04</Text>
            </Pressable>

            <Pressable style={styles.button} onPress={() => goTo("/ex05")}>
                <Text style={styles.buttonText}>Exercício 05</Text>
            </Pressable>

            <Pressable style={styles.button} onPress={() => goTo("/ex06")}>
                <Text style={styles.buttonText}>Exercício 06</Text>
            </Pressable>

            <Pressable style={styles.button} onPress={() => goTo("/ex07")}>
                <Text style={styles.buttonText}>Exercício 07</Text>
            </Pressable>

            
            <Pressable style={styles.button} onPress={() => goTo("/ex08")}>
                <Text style={styles.buttonText}>Exercício 08</Text>
            </Pressable>

            <Pressable style={styles.button} onPress={() => goTo("/ex09")}>
                <Text style={styles.buttonText}>Exercício 09</Text>
            </Pressable>

            <Pressable style={styles.button} onPress={() => goTo("/ex10")}>
                <Text style={styles.buttonText}>Exercício 10</Text>
            </Pressable>

            





            {/* Vamos adicionando os outros depois */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0f172a",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 24,
        color: "#fff",
        marginBottom: 30,
        fontWeight: "bold",
    },
    button: {
        backgroundColor: "#38bdf8",
        padding: 15,
        width: 220,
        borderRadius: 8,
        marginBottom: 12,
    },
    buttonText: {
        textAlign: "center",
        fontWeight: "bold",
        color: "#020617",
    },
});
