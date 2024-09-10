import React, {useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from '../assets/res/style/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Header} from '../Components/NavigationHeader/index';
import DeviceInfo from 'react-native-device-info';

const DeviceDetail = () => {
  const appVersion = DeviceInfo.getVersion();
  const buildNumber = DeviceInfo.getBuildNumber();

  return (
    <View style={styles.container}>
      <Header Titel="Device Detail" />
      <View style={styles.container2}>
        <View style={styles.infoBox}>
          <Text style={styles.heading}>App Information</Text>
          <View style={styles.infoRow}>
            <Text style={styles.label}>App Version:</Text>
            <Text style={styles.value}>{appVersion}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Build Number:</Text>
            <Text style={styles.value}>{buildNumber}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    backgroundColor: colors.white,
  },
  container2: {
    flex: 1,
    alignItems: 'center',
  },
  infoBox: {
    marginTop: 15,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 4, // Adds shadow for Android
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2}, // Shadow for iOS
    shadowOpacity: 0.2, // Shadow opacity for iOS
    shadowRadius: 3, // Radius for iOS shadow
    width: '90%',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    // textAlign: 'center',
    color: '#333',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#555',
  },
  value: {
    fontSize: 18,
    fontWeight: '400',
    color: '#333',
  },
});

export default DeviceDetail;
