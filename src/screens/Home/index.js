import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CovidMessage, HomeMap, HomeSearch} from '../../components/molecular';

const index = () => {
  return (
    <View>
      <HomeMap />
      <CovidMessage />
      <HomeSearch />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
