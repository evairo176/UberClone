import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Gap} from '..';

const index = ({name, icon, type}) => {
  return (
    <View style={styles.containerDestination}>
      <View style={styles.iconContainer(type)}>{icon}</View>
      <Gap width={10} />
      <View style={styles.destinationBox}>
        <Text style={styles.destinationText}>{name}</Text>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  containerDestination: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 15,
    paddingTop: 15,
    margin: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#b3b3b3',
  },
  iconContainer: type => ({
    padding: 10,
    backgroundColor: type === 'destination' ? '#b3b3b3' : '#1065e9',
    borderRadius: 20,
  }),
  destinationBox: {
    padding: 15,
  },
  destinationText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    fontWeight: 500,
  },
});
