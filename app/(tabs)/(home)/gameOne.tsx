import { View, Text } from 'react-native';
import Connectr from '@/games/Connectr';

export default function GameScreen() {

  return (
    <View>
      <Text>
        Game one below
      </Text>
      <Connectr />
    </View>
  )
}