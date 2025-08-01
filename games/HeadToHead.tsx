import { Text, TextInput, View } from 'react-native';
import { useState, useEffect } from 'react';

export default function HeadToHead() {
  const [gameState, setGameState] = useState(null);


  return (
    <View>
      <Text>Head to Head Game</Text>
      <TextInput placeholder="Enter your move" />
    </View>
  );
}