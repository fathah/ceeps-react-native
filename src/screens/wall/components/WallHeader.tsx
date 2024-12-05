import {Text, View} from 'react-native';
import MaterialIcon from '@/components/common/MaterialIcon';
import colors from '@/styles/colors';
import {wallStyle} from '../style';
import SearchBar from './SearchBar';
import * as DropdownMenu from 'zeego/dropdown-menu';

const WallHeader = ({onSearch}: {onSearch: (text: string) => void}) => {
  return (
    <View style={wallStyle.container}>
      <View style={wallStyle.logo}>
        <MaterialIcon icon="aspect-ratio" color={colors.white} />
        <SearchBar onChange={onSearch} />
      </View>

      <View
        style={wallStyle.popMenu}>
        <DropdownMenu.Root modal>
          <DropdownMenu.Trigger>
            <MaterialIcon icon="dots-vertical" color={colors.white} />
          </DropdownMenu.Trigger>
          <DropdownMenu.Content
            onSelect={e => {
              console.log('Selected');
              console.log(e);
            }}>
            <DropdownMenu.Item key={'listview'} textValue="List View">
              <DropdownMenu.ItemTitle>
                <Text>List View</Text>
              </DropdownMenu.ItemTitle>
            </DropdownMenu.Item>

            <DropdownMenu.Item
              key={'2'}
              textValue="2 Images"
              onClick={() => {
                console.log('2 Images');
              }}>
              <DropdownMenu.ItemTitle
                onClick={() => {
                  console.log('Clicked 2 Images Inside');
                }}>
                <Text>2 Images</Text>
              </DropdownMenu.ItemTitle>
            </DropdownMenu.Item>

            <DropdownMenu.Item key={'3'} textValue="3 Images">
              <DropdownMenu.ItemTitle>
                <Text>3 Images</Text>
              </DropdownMenu.ItemTitle>
            </DropdownMenu.Item>
            <DropdownMenu.Item key={'4'} textValue="4 Images">
              <DropdownMenu.ItemTitle>
                <Text>4 Images</Text>
              </DropdownMenu.ItemTitle>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </View>
    </View>
  );
};

export default WallHeader;
