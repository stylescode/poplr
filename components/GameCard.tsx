import { Pressable, StyleSheet, Text, View } from "react-native";

export function GameCard({ game }: { game: any }) {
  return (
    <Pressable style={styles.card}>
      <View style={styles.left}>
        <Text>Icon</Text>
      </View>
      <View style={styles.right}>
        <Text style={styles.title}>{game.title}</Text>
        <Text>{game.description}</Text>
        <Text>Date</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#8516f5",
    borderRadius: 24,
    flex: 1,
    flexDirection: "row",
    height: 100,
    marginBottom: 20,
    padding: 20,
    width: "100%",
  },
  left: {
    alignItems: "flex-start",
    width: "20%",
  },
  right: {
    alignItems: "flex-end",
    width: "80%",
  },
  title: {
    fontSize: 40
  }
});