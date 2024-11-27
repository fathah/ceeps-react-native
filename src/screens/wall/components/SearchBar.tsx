import {TextInput} from 'react-native';
import {wallStyle} from '../style';
import colors from '@/styles/colors';
import {useEffect, useState} from 'react';

const SearchBar = ({onChange}: {onChange: (text: string) => void}) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onChange(query);
  };

  const timeOut: number = 2000;

  useEffect(() => {
    if (query.length < 2) return;
    const timeout = setTimeout(() => handleSearch(), timeOut);
    return () => clearTimeout(timeout);
  }, [query]);

  return (
    <TextInput
      style={wallStyle.input}
      placeholder="Search Images..."
      placeholderTextColor={colors.whiteTint}
      onChangeText={setQuery}
    />
  );
};

export default SearchBar;
