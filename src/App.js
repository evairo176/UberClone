import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {Home} from './screens';

const App = () => {
  return (
    <View>
      <StatusBar />
      <Home />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
