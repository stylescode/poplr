import { Image, View, StyleSheet, Text } from 'react-native';
import { useState, useEffect } from 'react';

export default function GameOneMovieTile({ movieDetails }: { movieDetails: any }) {

  const [movieTitle, setMovieTitle] = useState<string | null>(null);
  const [movieReleaseDate, setMovieReleaseDate] = useState<string | null>(null);
  const [moviePosterPath, setMoviePosterPath] = useState<string | null>(null);

  useEffect(() => {
    if (movieDetails) {
      setMovieTitle(movieDetails.title);
      setMovieReleaseDate(movieDetails.release_date);
      setMoviePosterPath(movieDetails.poster_path);
    }
  }, [movieDetails]);

  return (
    <View style={styles.container}>
      {movieDetails && (
        <View style={styles.movieContainer}>
          <Text>{movieTitle}</Text>
          <Text>{movieReleaseDate?.slice(0, 4)}</Text>
          <Image
            source={{ uri: `https://image.tmdb.org/t/p/w500/${moviePosterPath}` }}
            style={{ width: 100, height: 150 }}
          />
        </View>
      )}
      {!movieDetails && (
        <View style={styles.fillerContainer}>
          <Text>+</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderColor: "#000",
    borderRadius: 10,
    borderWidth: 1,
    width: "90%",
  },
  fillerContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  movieContainer: {
    alignItems: "center",
    justifyContent: "center",
  }
});