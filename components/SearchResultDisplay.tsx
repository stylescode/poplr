import { View, Text } from 'react-native';

interface SearchResultDisplayProps {
  searchResults: any[];
}

export default function SearchResultDisplay({ searchResults }: SearchResultDisplayProps) {
  if (searchResults) {
    console.log(searchResults[0]);
  }
  return (
    <View>
      {searchResults && searchResults.map((result: any) => (
        <View key={result.id}>
          <Text>{result.title}</Text>
          <Text>{result.release_date}</Text>
        </View>
      ))}
    </View>
  );
}