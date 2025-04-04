import { View, Text } from 'react-native';
import { getMovieCredits } from '@/api/tmdbApi';

interface SearchResultDisplayProps {
  searchResults: any[];
}

export default function SearchResultDisplay({ searchResults }: SearchResultDisplayProps) {

  return (
    <View>
      {searchResults && searchResults.map((result: any) => (
        <View key={result.id}>
          <Text>{result.title}</Text>
          <Text>{result.release_date.slice(0, 4)}</Text>
        </View>
      ))}
    </View>
  );
}