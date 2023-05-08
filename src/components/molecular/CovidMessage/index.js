import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Gap} from '..';
import Icon from 'react-native-vector-icons/AntDesign';

const index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>covid message</Text>
      <Gap height={10} />
      <Text style={styles.text}>
        lorem abc dwadawd dawd lorem abc dwadawd dawd lorem abc dwadawd dawd
        lorem abc dwadawd dawd lorem abc dwadawd dawd
      </Text>
      <Gap height={10} />
      <Text style={styles.learMore}>
        learn more <Icon name="arrowright" color="white" />
      </Text>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1065e9',
    padding: 15,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    color: 'white',
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    fontWeight: 600,
  },
  text: {
    color: 'white',
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    fontWeight: 400,
    textAlign: 'justify',
  },
  learMore: {
    color: 'white',
    fontSize: 15,
    fontWeight: 600,
  },
});
