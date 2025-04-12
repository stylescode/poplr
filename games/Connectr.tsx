import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import { getMovies, getMovieDetails, getMovieCredits } from '@/api/tmdbApi';
import SearchComponent from '@/components/SearchComponent';
import { findMatchingCastMembers } from '@/utils/gameOneTools';
import GameOneMovieTile from '@/components/GameOneMovieTile';
import { Sheet, YStack, Button } from 'tamagui';


export default function Connectr() {

  const [startingMovie, setStartingMovie] = useState(null);
  const [secondMovie, setSecondMovie] = useState(null);
  const [thirdMovie, setThirdMovie] = useState(null);
  const [fourthMovie, setFourthMovie] = useState(null);
  const [endingMovie, setEndingMovie] = useState(null);

  const [activeMovie, setActiveMovie] = useState<number>(0);
  const [searching, setSearching] = useState(false);

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

  return (
    <View>

      <TouchableOpacity>
        <GameOneMovieTile movieDetails={startingMovie} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress(2)}>
        <GameOneMovieTile movieDetails={secondMovie} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress(3)}>
        <GameOneMovieTile movieDetails={thirdMovie} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress(4)}>
        <GameOneMovieTile movieDetails={fourthMovie} />
      </TouchableOpacity>
      <TouchableOpacity>
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

    </View>
  );
}