import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native'
import React from 'react'

const Footer = () => {

  const handlePress = () => {
   Linking.openURL('https://www.linkedin.com/in/yamilhamui/');
  };

  return (
    <View style={styles.containerFooter}>
        <Text style={styles.textFooter}>powered by</Text>
        <TouchableOpacity onPress={handlePress}>
        <Text style={styles.textYamil}>YamilH</Text>
        </TouchableOpacity>

    </View>
  )
}


const styles = StyleSheet.create({
  containerFooter: {
    backgroundColor: '#121212',
    position: 'absolute',
    bottom: 0,
    height: 20,
    width: '100%',
    flex: 1,
    flexDirection: "row",
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: 20

  },
  textFooter: {
    color: '#fff',
    fontSize: 10,
  },
  textYamil: {
    paddingLeft: 8,
    color: '#fff',
  }

})

export default Footer