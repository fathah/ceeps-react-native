import {Dimensions, Image, Text, View} from 'react-native';

const Posts = () => {
  const width = Dimensions.get('window').width;
  const names = [
    'AE4V',
    '8GES',
    'VH4S',
    'D438',
    'C83S',
    'S2SS',
    'AE4V',
    '8GES',
    'VH4S',
    'D438',
  ];
  return (
    <View style={{flex: 1, backgroundColor: '#fefefe'}}>
      {Array.from({length: 10}).map((_, index) => (
        <View key={index} style={{flex: 1}}>
          <View
            style={{
              padding: 15,
              flex: 1,
              flexDirection: 'row',
              
              alignItems: 'center',
              marginBottom: 2,
            }}>
            <View
              style={{
                height: 30,
                width: 30,
                borderRadius: 15,
                backgroundColor: 'grey',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 8,
              }}>
              <Text>{names[index][0]}</Text>
            </View>
            <Text>{names[index]}</Text>
          </View>
          <View style={{flex: 1, width: width}}>
            <Image
              source={{
                uri: `https://picsum.photos/500/500?random=${index + 1}`,
              }}
              style={{width: width, height: width}}
              resizeMode="cover"
            />
          </View>
        </View>
      ))}
    </View>
  );
};

export default Posts;
