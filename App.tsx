import { View, Text, FlatList, StyleSheet, TextInput, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import ComponenteCoinItem from './components/CoinItem'

interface Coin {
id: string;
name: string;
symbol: string;
image: string;
current_price: number;
market_cap: number;
market_cap_rank: number;
price_change_percentage_24h: number;
}

const App = () => {

const [coins, setCoins] = useState<Coin[]>([]);
const [search, setSearch] = useState<string>('');
const [refreshing, setRefreshing] = useState<boolean>(false);

const loadData = async () => {
const res = await fetch(
"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
);
const data = await res.json() as Coin[];
setCoins(data);
};

useEffect(() => {
loadData();
}, []);

return (
<View style={styles.container}>
<StatusBar backgroundColor="#141414" />
<View style={styles.header}>
<Text style={styles.title}>CoinView</Text>
<TextInput
style={styles.searchInput}
placeholder='Search a Coin'
placeholderTextColor='#858585'
onChangeText={text => setSearch(text)}
/>
</View>

<FlatList
    style={styles.list}
    data={coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search.toLocaleLowerCase()) ||
        coin.symbol.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    )}
    renderItem={({ item }) => {
      return <ComponenteCoinItem coin={item} />;
    }}
    showsVerticalScrollIndicator={false}
    refreshing={refreshing}
    onRefresh={async () => {
      setRefreshing(true);
      await loadData();
      setRefreshing(false);
    }}
  />
</View>

);
}

const styles = StyleSheet.create({
container: {
backgroundColor: '#141414',
alignItems: 'center',
flex: 1,
},
title: {
color: '#fff',
marginTop: 10,
fontSize: 20,
},
list: {
width: '90%',
},
header: {
flexDirection: 'row',
justifyContent: 'space-between',
width: '90%',
marginBottom: 10,
},
searchInput: {
color: '#fff',
borderBottomColor: '#4657CE',
borderBottomWidth: 1,
width: '40%',
textAlign: 'center',
},
});

export default App;