import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';

let id = 0;

const App = () => {
  const [items, setItems] = useState([
    {id: id++, text: 'Batteries'},
    {id: id++, text: 'Cheese'},
    {id: id++, text: 'Pepper'},
    {id: id++, text: 'Juice'},
  ])

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={items}
        renderItem={({item}) =>
          <ListItem item={item} />
        }
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default App;
