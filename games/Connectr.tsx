import { Button, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import { getMovieDetails, getMovieCredits } from '@/api/tmdbApi';
import SearchComponent from '@/components/SearchComponent';
import { findMatchingCastMembers } from '@/utils/gameOneTools';
import GameOneMovieTile from '@/components/GameOneMovieTile';
import { Sheet, YStack } from 'tamagui';

export default function Connectr() {

  const [startingMovie, setStartingMovie] = useState(null);
  const [secondMovie, setSecondMovie] = useState(null);
  const [thirdMovie, setThirdMovie] = useState(null);
  const [fourthMovie, setFourthMovie] = useState(null);
  const [endingMovie, setEndingMovie] = useState(null);

  const [activeMovie, setActiveMovie] = useState<number>(0);
  const [searching, setSearching] = useState(false);

  const [gameResult, setGameResult] = useState<string>("");

  useEffect(() => {
    getMovieDetails(70160).then((details) => {
      setStartingMovie(details);
    }
    );
    getMovieDetails(101299).then((details) => {
      setEndingMovie(details);
    }
    );
  }, []);

  const handlePress = (movieNum: number) => {
    setSearching(true);
    setActiveMovie(movieNum);
  };

  const assignMovie = (movie: any) => {
    if (activeMovie === 2) {
      setSecondMovie(movie);
    } else if (activeMovie === 3) {
      setThirdMovie(movie);
    } else if (activeMovie === 4) {
      setFourthMovie(movie);
    }
  }

  const handleSubmit = async () => {
    if (!startingMovie || !secondMovie || !thirdMovie || !fourthMovie || !endingMovie) {
      return;
    }

    const startingMovieCredits = await getMovieCredits(startingMovie.id);
    const secondMovieCredits = await getMovieCredits(secondMovie.id);
    const thirdMovieCredits = await getMovieCredits(thirdMovie.id);
    const fourthMovieCredits = await getMovieCredits(fourthMovie.id);
    const endingMovieCredits = await getMovieCredits(endingMovie.id);

    if ((findMatchingCastMembers(startingMovieCredits.cast, secondMovieCredits.cast).length === 0) ||
      (findMatchingCastMembers(secondMovieCredits.cast, thirdMovieCredits.cast).length === 0) ||
      (findMatchingCastMembers(thirdMovieCredits.cast, fourthMovieCredits.cast).length === 0) ||
      (findMatchingCastMembers(fourthMovieCredits.cast, endingMovieCredits.cast).length === 0)) {
      setGameResult("wrong");
      return;
    }

    setGameResult("correct");
  }

  const handleWrong = () => {
    setTimeout(() => {
      setGameResult("");
    }, 1000);
    return (
      <View style={styles.wrongContainer}>
        <Text style={styles.wrong}>INCORRECT!</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.movieTile}>
        <GameOneMovieTile movieDetails={startingMovie} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress(2)} style={styles.movieTile}>
        <GameOneMovieTile movieDetails={secondMovie} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress(3)} style={styles.movieTile}>
        <GameOneMovieTile movieDetails={thirdMovie} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress(4)} style={styles.movieTile}>
        <GameOneMovieTile movieDetails={fourthMovie} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.movieTile}>
        <GameOneMovieTile movieDetails={endingMovie} />
      </TouchableOpacity>

      <Sheet
        open={searching}
        onOpenChange={setSearching}
        snapPoints={[80]}
        dismissOnSnapToBottom
      >
        <Sheet.Overlay
          animation="lazy"
          bg="$shadow2"
        />
        <Sheet.Handle />
        <Sheet.Frame>
          <YStack>
            <SearchComponent assignMovie={assignMovie} setSearching={setSearching}/>
          </YStack>
        </Sheet.Frame>
      </Sheet>

      <Button
        onPress={handleSubmit}
        title="Submit"
      />
      {gameResult === "correct" && <Text>Correct!</Text>}
      {gameResult === "wrong" && handleWrong()}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderWidth: 1,
    flex: 1,
    justifyContent: "space-between",
    paddingTop: 20,
    paddingBottom: 20,
  },
  movieTile: {
    width: "90%",
    height: "16%",
  },
  wrong: {
    color: "red",
    fontSize: 40,
    fontWeight: 900,
    zIndex: 10,
  },
  wrongContainer: {
    alignSelf: "center",
    top: "45%",
    flex: 1,
    position: "absolute",
  }
});