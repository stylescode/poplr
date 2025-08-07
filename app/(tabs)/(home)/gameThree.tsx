import { StyleSheet, Text, TextInput, View } from 'react-native';
import HeadToHead from '@/games/HeadToHead';

export default function GameScreen() {
  return (
    <View style={styles.container}>
      <HeadToHead />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#red',
  },
});