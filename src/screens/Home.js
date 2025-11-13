import React, { useEffect, useState } from 'react';
import { Text, View, FlatList } from 'react-native';
import { mockApi } from './constants/endpoints';

const Home = () => {
  const [data, setData] = useState([]);
  async function fetchData() {
    const data = await fetch(mockApi);
    const json = await data.json();
    setData(json);
    console.log(json);
  }
  useEffect(()=>fetchData(),[])
  return (
    <View>
      <Text>Home</Text>
      <FlatList
        data={data}
        keyExtractor={data => data.id}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
};

export default Home;
