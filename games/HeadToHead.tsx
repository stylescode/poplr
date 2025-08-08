import { Image, Text, TextInput, View, ScrollView, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import MovieSearcher from '@/components/MovieSearcher';
import { findMatchingCastMembers } from '@/utils/findMatchingCast';
import { findCast } from '@/utils/findCast';

export default function HeadToHead() {
  const [gameState, setGameState] = useState(null);
  const [movies, setMovies] = useState([]);

  const verifyMovie = async (movie) => {
    if (movies.includes(movie)) {
      console.log('Movie already selected:', movie);
      return;
    }

    const lastMovie = movies[movies.length - 1];
    const lastMovieCast = lastMovie ? await findCast(lastMovie) : null;
    const currentMovieCast = await findCast(movie);

    console.log('Last Movie Cast:', lastMovieCast);
    console.log('Current Movie Cast:', currentMovieCast);

    if (lastMovieCast && currentMovieCast) {
      const matchingCast = findMatchingCastMembers(lastMovieCast, currentMovieCast);
      if (matchingCast.length > 0) {
        console.log('Matching cast found:', matchingCast);
      } else {
        console.log('No matching cast found.');
        return;
      }
    }

    setMovies([...movies, movie]);
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