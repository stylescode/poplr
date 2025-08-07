import { Image, Text, TextInput, View, ScrollView, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import MovieSearcher from '@/components/MovieSearcher';

export default function HeadToHead() {
  const [gameState, setGameState] = useState(null);
  const [movies, setMovies] = useState([]);

  const verifyMovie = (movie) => {
    if (movies.includes(movie)) {
      console.log('Movie already selected:', movie);
      return;
    }
    setMovies([...movies, movie]);
    console.log('Movie verified:', movie);
  }

  const addMovie = (movie) => {
    console.log('Movie added:', movie);
  }


  return (
    <View style={styles.container}>
      <Text>Head to Head</Text>
      <Text>Selected Movies:</Text>
      <ScrollView
        contentContainerStyle={styles.selectedMoviesContainer}
        horizontal
      >
        {movies && movies.map((movie) => (
          <View key={movie.id}>
            <Image
              source={{ uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}` }}
              style={{ width: 160, height: 240 }}
            />
            <Text key={movie.id}>{movie.title}</Text>
          </View>
        ))}
      </ScrollView>
      <MovieSearcher movieReceiverFunc={verifyMovie} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
  selectedMoviesContainer: {
    flexDirection: 'row',
  }
});