import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home" }} />

      <Stack.Screen name="ex01" options={{ title: "Exercício 01" }} />
      <Stack.Screen name="ex02" options={{ title: "Exercício 02" }} />
      <Stack.Screen name="ex03" options={{ title: "Exercício 03" }} />
      <Stack.Screen name="ex04" options={{ title: "Exercício 04" }} />
      <Stack.Screen name="ex05" options={{ title: "Exercício 05" }} />
      <Stack.Screen name="ex06" options={{ title: "Exercício 06" }} />
      <Stack.Screen name="ex07" options={{ title: "Exercício 07" }} />
      <Stack.Screen name="ex08" options={{ title: "Exercício 08" }} />
      <Stack.Screen name="ex09" options={{ title: "Exercício 09" }} />
      <Stack.Screen name="ex10" options={{ title: "Exercício 10" }} />
    </Stack>
  );
}
