import { Text, View, StyleSheet } from "react-native";
import { GameCard } from "@/components/GameCard";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <GameCard game={{ title: "Game 1", description: "Description 1" }} />
      <GameCard game={{ title: "Game 2", description: "Description 2" }} />
      <GameCard game={{ title: "Game 3", description: "Description 3" }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    gap: 20
  }
});