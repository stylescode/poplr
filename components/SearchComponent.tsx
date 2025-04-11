import { Pressable, View, Text, StyleSheet, Image, TextInput } from 'react-native';
import { useState } from 'react';
import { getMovieCredits, getMovies } from '@/api/tmdbApi';
import { YStack } from 'tamagui';

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
          getMovies(searchText).then((movies) => {
            setMovieResults(movies.results);
          });
        }}
      >
      </TextInput>
      <View style={styles.movieResults}>
        {movieResults && movieResults.map((result: any) => (
          <Pressable key={result.id} onPress={() => handlePress(result)}>
            <View style={styles.movieContainer}>
              <Image
                source={{ uri: `https://image.tmdb.org/t/p/w500/${result.poster_path}` }}
                style={{ width: 100, height: 150 }}
              />
              <Text>{result.title}</Text>
              <Text>{result.release_date.slice(0, 4)}</Text>
            </View>
          </Pressable>
        ))}
      </View>
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
    flexDirection: "row",
  },
  movieContainer: {
    borderColor: "blue",
    borderWidth: 1,
    borderRadius: 10,
    width: 100
  }
});