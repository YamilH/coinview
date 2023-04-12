import { View, Text, Image } from 'react-native'
import React, { useState, useEffect } from 'react'

const Loader = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <View>
        <Image source={require('../assets/portal.gif')} />
      </View>
    );
  }

  return null;
};

export default Loader