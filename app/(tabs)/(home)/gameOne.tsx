import { ScrollView, Text } from 'react-native';
import Connectr from '@/games/Connectr';

export default function GameScreen() {

  return (
    <ScrollView>
      <Text>
        Game one below
      </Text>
      <Connectr />
    </ScrollView>
  )
}