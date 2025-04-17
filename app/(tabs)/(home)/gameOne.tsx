import { View, StyleSheet } from 'react-native';
import Connectr from '@/games/Connectr';

export default function GameScreen() {

  return (
    <View style={styles.container}>
      <Connectr />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});