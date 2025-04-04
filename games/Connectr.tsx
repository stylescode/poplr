import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import { getMovies, getMovieDetails, getMovieCredits } from '@/api/tmdbApi';
import SearchResultDisplay from '@/components/SearchResultDisplay';
import { findMatchingCastMembers } from '@/utils/gameOneTools';
import GameOneMovieTile from '@/components/GameOneMovieTile';

export default function Connectr() {

  const [movieResults, setMovieResults] = useState([]);

  const [startingMovie, setStartingMovie] = useState(null);
  const [secondMovie, setSecondMovie] = useState(null);
  const [thirdMovie, setThirdMovie] = useState(null);
  const [fourthMovie, setFourthMovie] = useState(null);
  const [endingMovie, setEndingMovie] = useState(null);

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

  const handlePress = () => {
    setSearching(!searching);
  };

  return (
    <View>
      {searching && (
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
      <TouchableOpacity>
        <GameOneMovieTile movieDetails={startingMovie} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress}>
        <GameOneMovieTile movieDetails={secondMovie} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress}>
        <GameOneMovieTile movieDetails={thirdMovie} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress}>
        <GameOneMovieTile movieDetails={fourthMovie} />
      </TouchableOpacity>
      <TouchableOpacity>
        <GameOneMovieTile movieDetails={endingMovie} />
      </TouchableOpacity>

      <SearchResultDisplay searchResults={movieResults} />
    </View>
  );
}