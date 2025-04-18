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
          <Text style={styles.movieText}>{movieTitle}</Text>
          <Text style={styles.movieText}>{movieReleaseDate?.slice(0, 4)}</Text>
          <Image
            source={{ uri: `https://image.tmdb.org/t/p/w500/${moviePosterPath}` }}
            style={[StyleSheet.absoluteFillObject, { borderRadius: 10 }]}
            resizeMode='cover'
          />
        </View>
      )}
      {!movieDetails && (
        <View style={styles.fillerContainer}>
          <Text style={styles.plusSign}>+</Text>
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
    flex: 1,
    justifyContent: "center",
  },
  fillerContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  movieContainer: {
    alignItems: "center",
    borderRadius: 10,
    justifyContent: "center",
    flex: 1,
    width: "100%",
  },
  movieText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    zIndex: 1,
  },
  plusSign: {
    fontSize: 30,
  }
});