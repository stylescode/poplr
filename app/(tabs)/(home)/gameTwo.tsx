import { StyleSheet, Text, TextInput, View } from 'react-native';
import FourSquare from '@/games/FourSquare';

export default function GameScreen() {
  return (
    <View>
      <FourSquare />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});