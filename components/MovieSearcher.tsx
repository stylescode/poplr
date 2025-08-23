import { useState } from "react";
import { Image, Pressable, Text, View, ScrollView, StyleSheet, TextInput } from "react-native";
import { getMovies } from '@/api/tmdbApi';

interface MovieSearchProps {
  movieReceiverFunc?: Function;
}

export default function MovieSearcher({ movieReceiverFunc }: MovieSearchProps) {

  const [searchQuery, setSearchQuery] = useState("");
  const [movieResults, setMovieResults] = useState<any[]>([]);

  const handlePress = (movie: any) => {
    if (movieReceiverFunc) {
      movieReceiverFunc(movie);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Search movies..."
        value={searchQuery}
        onChangeText={(text) => {
          setSearchQuery(text);
          getMovies(text).then((movies) => {
            setMovieResults(Array.isArray(movies.results) ? movies.results : []);
          });
        }}
        style={styles.input}
      />
      <ScrollView
        horizontal
        contentContainerStyle={styles.movieResults}
        showsHorizontalScrollIndicator={true}
      >
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
  input: {
    borderColor: "grey",
    borderWidth: 1,
    padding: 10,
    margin: 10,
    width: "80%",
  },
  movieResults: {
    flexDirection: "row",
    padding: 10,
  },
  movieContainer: {
    marginRight: 10,
    alignItems: "center",
  },
  movieTitle: {
    fontSize: 16,
  },
});
