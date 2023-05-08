import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const index = () => {
  return (
    <View style={styles.container}>
      <Text>ini adalah map</Text>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    height: 200,
    backgroundColor: 'grey',
  },
});
