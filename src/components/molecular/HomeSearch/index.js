import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {Destination, Gap} from '..';

const index = () => {
  return (
    <View style={styles.containerHomeSearch}>
      {/* input box  */}
      <View style={styles.inputBox}>
        <Text style={styles.inputText}>Where to?</Text>
        <View style={styles.timeContainer}>
          <AntDesign name="clockcircle" size={16} />
          <Gap width={5} />
          <Text>Now</Text>
          <Gap width={5} />
          <MaterialIcons name="keyboard-arrow-down" size={16} />
        </View>
      </View>

      {/* previous destination  */}
      <Destination
        name="Spin NightClub"
        icon={<AntDesign name="clockcircle" size={16} color="white" />}
        type="destination"
      />
      <Destination
        name="Home"
        icon={<Entypo name="home" size={16} color="white" />}
        type="home"
      />
      {/* home destination  */}
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  containerHomeSearch: {
    backgroundColor: '#d9d9d9',
  },
  inputBox: {
    backgroundColor: '#d0d0d0',
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  inputText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    fontWeight: 600,
    color: '#6e6e6e',
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 35,
  },
});
