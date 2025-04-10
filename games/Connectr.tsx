import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import { getMovies, getMovieDetails, getMovieCredits } from '@/api/tmdbApi';
import SearchComponent from '@/components/SearchResultDisplay';
import { findMatchingCastMembers } from '@/utils/gameOneTools';
import GameOneMovieTile from '@/components/GameOneMovieTile';

export default function Connectr() {

  const [startingMovie, setStartingMovie] = useState(null);
  const [secondMovie, setSecondMovie] = useState(null);
  const [thirdMovie, setThirdMovie] = useState(null);
  const [fourthMovie, setFourthMovie] = useState(null);
  const [endingMovie, setEndingMovie] = useState(null);

  const [activeMovie, setActiveMovie] = useState<Number>(0);

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

  const handlePress = (movieNum: Number) => {
    setSearching(!searching);
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

      <SearchComponent searchStatus={searching} assignMovie={assignMovie}/>
    </View>
  );
}