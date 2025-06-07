import { StyleSheet, Text, View } from "react-native";
import { G } from "react-native-svg";

interface FourSquareGridProps {
  movieInfo: {
    [key: string]: [string, string, string, string];
  }
}

export function FourSquareGrid({ movieInfo }: FourSquareGridProps ) {
  return (
    <View style={styles.gridContainer}>
      {movieInfo && Object.keys(movieInfo).map((key) => {
        const movies = movieInfo[key];
        return movies.map((movieTitle, index) => {
          console.log(movieTitle);
          return (
            <View style={styles.singleMovieItem} key={`${key}-${index}`}>
              <Text>
                {movieTitle}
              </Text>
            </View>
          );
        });
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    height: "80%",
    width: "96%",
  },
  singleMovieItem: {
    height: "25%",
    width: "25%",
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 10,
  }
});