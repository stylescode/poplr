import { View, Text, TextInput } from 'react-native';
import { useState } from 'react';
import { getMovies } from '@/api/tmdbApi';

export default function Connectr() {

  const [movieResults, setMovieResults] = useState([]);

  return (
    <View>
      <TextInput
        placeholder="Search"
        onChangeText={(text) => {
          getMovies(text).then((movies) => {
            setMovieResults(movies.results);
          });
        }}
      >
      </TextInput>
    </View>
  );
}