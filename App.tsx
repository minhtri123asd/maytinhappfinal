import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
interface PButtonProps {
  title: string;
  onClick?: any;
}
const PButton = ({title, onClick}: PButtonProps) => {
  return (
    <TouchableOpacity
      style={{
        borderWidth: 1,
        width: '28%',
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        backgroundColor: '#E6E6FA',
        borderRadius: 10,
      }}
      onPress={onClick}>
      <Text style={{color: 'black', fontSize: 30}}>{title}</Text>
    </TouchableOpacity>
  );
};
export default function App() {
  const [text, onChangeText] = useState('');
  const [data, setData] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [ketqua, setKetqua] = useState('');
  const [input, setInput] = useState('');
  const renderItem = ({item}) => {
    return (
      <PButton
        title={item}
        onClick={() => {
          setInput(`${input}${item}`);
        }}
      />
    );
  };
  return (
    <View style={styles.container}>
      <View style={{height: windowHeight * 0.2}}>
        <View style={{padding: 10, marginVertical: 20}}>
          <Text style={{color: 'black', fontSize: 25, fontWeight: 'bold'}}>
            {input}
          </Text>
        </View>
        <View style={{marginHorizontal: 20}}>
          {ketqua === '' ? (
            <View />
          ) : (
            <Text style={{color: 'black', fontSize: 40}}>{ketqua}</Text>
          )}
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={{width: windowWidth * 0.8}}>
          <View style={{flexDirection: 'row'}}>
            <PButton
              title="C"
              onClick={() => {
                setInput('');
                setKetqua('');
              }}
            />
            <PButton title="(" />
            <PButton title=")" />
          </View>
          <FlatList data={data} numColumns={3} renderItem={renderItem} />
        </View>
        <View style={{width: '59%'}}>
          <PButton title="/" onClick={() => setInput(`${input} / `)} />
          <PButton title="X" onClick={() => setInput(`${input} * `)} />
          <PButton title="-" onClick={() => setInput(`${input} - `)} />
          <PButton title="+" onClick={() => setInput(`${input} + `)} />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: windowWidth,
          justifyContent: 'space-between',
        }}>
        <PButton
          title="0"
          onClick={() => {
            setInput(`${input}${0}`);
          }}
        />
        <PButton title="." />
        <PButton
          title="="
          onClick={() => {
            let arr = input.split(' ');
            switch (arr[1]) {
              case '+':
                setKetqua(parseInt(arr[0]) + parseInt(arr[2]));
                break;
              case '-':
                setKetqua(parseInt(arr[0]) - parseInt(arr[2]));

              default:
                break;
            }
          }}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
