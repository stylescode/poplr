import { Pressable, View, Text, StyleSheet, Image, TextInput, ScrollView } from 'react-native';
import { useState } from 'react';
import { getMovies } from '@/api/tmdbApi';

interface SearchResultDisplayProps {
  assignMovie: Function;
  setSearching: Function;
}

export default function SearchComponent({ assignMovie, setSearching }: SearchResultDisplayProps) {

  const [searchText, setSearchText] = useState("");
  const [movieResults, setMovieResults] = useState<any[]>([]);

  const handlePress = (movie: any) => {
    assignMovie(movie);
    setSearching(false);
    setMovieResults([]);
    setSearchText("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="search for a movie"
        value={searchText}
        onChangeText={(text) => {
          setSearchText(text);
          getMovies(text).then((movies) => {
            setMovieResults(movies.results);
          });
        }}
      >
      </TextInput>
      <ScrollView
        horizontal
        contentContainerStyle={styles.movieResults}
        showsHorizontalScrollIndicator={true}>
        {movieResults && movieResults.map((result: any) => (
          <Pressable key={result.id} onPress={() => handlePress(result)}>
            <View style={styles.movieContainer}>
              <Image
                source={{ uri: `https://image.tmdb.org/t/p/w500/${result.poster_path}` }}
                style={{ width: 160, height: 240 }}
              />
              <Text style={styles.movieTitle}>{result.title}</Text>
              <Text>{result.release_date.slice(0, 4)}</Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: "red",
    borderRadius: 10,
    borderWidth: 1,
  },
  movieResults: {
    borderColor: "blue",
    borderWidth: 1,
    gap: 10,
  },
  movieContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 10,
    height: 300,
    width: 160,
  },
  movieTitle: {
    fontSize: 12,
    fontWeight: "bold",
  },
});