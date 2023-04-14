import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

interface Coin {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
}


const CoinItem: React.FC<{ coin: Coin }> = ({ coin }) => {
return (

<View style={styles.containerItem}>
<View style={styles.coinNames}>
<Image style={styles.image} source={{ uri: coin.image }} />
<View style={styles.containerNames}>
<Text style={styles.text}>{coin.name}</Text>
<Text style={styles.textSymbol}>{coin.symbol}</Text>
</View>
</View>
<View>
<Text style={styles.textPrice}>${coin.current_price}</Text>
<View style={styles.forVector}>

<Text style={{ color: coin.price_change_percentage_24h > 0 ? '#00b960' : '#fc4422' }}>
  {coin.price_change_percentage_24h > 0 ? '▲ ' : '▼ '}
  {Math.abs(coin.price_change_percentage_24h)}%
</Text>

</View>
</View>
</View>

)
}

const styles = StyleSheet.create({
containerItem: {
backgroundColor: '#121212',
paddingTop: 10,
flexDirection: 'row',
justifyContent: 'space-between'
},
containerNames: {
marginLeft: 10,
},
coinNames: {
flexDirection: 'row',
},
image: {
width: 30,
height: 30,
},
text: {
color: '#fff',
},
textSymbol: {
color: '#434343',
textTransform: 'uppercase',
},
pricePercentage: {
color: '#fff',
textAlign: 'right',
paddingLeft: 6,
},
textPrice: {
color: '#fff',
textAlign: 'right',
},
forVector: {
  flexDirection: 'row',
}
})

export default CoinItem