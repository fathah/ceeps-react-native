import {TextInput} from 'react-native';
import {wallStyle} from '../style';
import colors from '@/styles/colors';
import { useRef} from 'react';

const SearchBar = ({onChange}: {onChange: (text: string) => void}) => {
  const inputRef = useRef<TextInput>(null);

  const handleSearch = () => {
    if (inputRef.current) {
      onChange((inputRef.current as any).value);
    }
  };

  const handleQuery = (text: string) => {
    if (inputRef.current) {
      (inputRef.current as any).value = text;
    }
  };

  return (
    <TextInput
      ref={inputRef}
      style={wallStyle.input}
      placeholder="Search Images..."
      placeholderTextColor={colors.whiteTint}
      onChangeText={handleQuery}
      onSubmitEditing={handleSearch}
    />
  );
};

export default SearchBar;
