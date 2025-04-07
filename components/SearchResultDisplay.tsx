import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import { useState } from 'react';
import { getMovieCredits, getMovies } from '@/api/tmdbApi';

interface SearchResultDisplayProps {
  searchStatus: boolean;
}

export default function SearchResultDisplay({ searchStatus }: SearchResultDisplayProps) {

  const [movieResults, setMovieResults] = useState<any[]>([]);

  return (
    <View style={styles.container}>
      {searchStatus && (
            <TextInput
            placeholder="Search"
            onChangeText={(text) => {
              getMovies(text).then((movies) => {
                setMovieResults(movies.results);
              });
            }}
          >
          </TextInput>
      )}
      {movieResults && movieResults.map((result: any) => (
        <View key={result.id}>
          <Image
            source={{ uri: `https://image.tmdb.org/t/p/w500/${result.poster_path}` }}
            style={{ width: 100, height: 150 }}
          />
          <Text>{result.title}</Text>
          <Text>{result.release_date.slice(0, 4)}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: "red",
    borderWidth: 1,
  },
});