import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="gameOne" options={{ title: "Game 1" }} />
      <Stack.Screen name="gameTwo" options={{ title: "Game 2" }} />
      <Stack.Screen name="gameThree" options={{ title: "Game 3" }} />
    </Stack>
  );
}