import { Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import { FourSquareGrid } from '@/components/FourSquareGrid';


export default function FourSquare() {

  const [movieInfo, setMovieInfo] = useState<any>(null);


  useEffect(() => {
    // Fetch movie data or any other initialization logic
    // Example: setMovieInfo(fetchedData);
    const exampleData = {
      "Disney Movies": ["Aladdin", "The Lion King", "Toy Story", "Finding Nemo"],
      "Stars Tom Hanks": ["Big", "Forrest Gump", "Cast Away", "Saving Private Ryan"],
      "Classic Movies": ["The Godfather", "Pulp Fiction", "The Shawshank Redemption", "The Dark Knight"],
      "Sci-Fi Movies": ["The Matrix", "Inception", "Interstellar", "Blade Runner 2049"]
    }
    setMovieInfo(exampleData);
  }, []);


  return (
    <View>
      <Text>Four Square</Text>
      <FourSquareGrid movieInfo={movieInfo} />
    </View>
  );
}