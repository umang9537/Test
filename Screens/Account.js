import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../assets/res/style/colors';
import {TouchableRipple} from 'react-native-paper';
import {Header} from '../Components/NavigationHeader/index';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Account(props) {
  const {navigation} = props;

  return (
    <View style={styles.container}>
      <Header Titel="Account" />
      <View style={styles.infoSection}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.sectionTitle}>Personal Information</Text>
          <TouchableOpacity style={styles.editIcon}>
            <MaterialIcon
              name="account-edit"
              size={26}
              color="black"
              onPress={() => navigation.navigate('EditProfile')}
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.infoText}>
          <Text style={styles.label}>Name:</Text> Umang
        </Text>
        <Text style={styles.infoText}>
          <Text style={styles.label}>Gendar:</Text> Male
        </Text>
        <Text style={styles.infoText}>
          <Text style={styles.label}>Date Of Birth:</Text> 28/08/1995
        </Text>
        <Text style={styles.infoText}>
          <Text style={styles.label}>Email Id:</Text> hiral@avanzar.in
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    backgroundColor: colors.white,
    //paddingBottom: "3%",
  },
  headerTitle: {
    color: colors.headerTitle,
    fontSize: 20,
    fontWeight: '700',
  },
  header: {
    width: '100%',
    backgroundColor: colors.header,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    // paddingVertical: 20,
    paddingHorizontal: 15,
    gap: 15,
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
  },
  editIcon: {
    padding: 10,
  },
  infoSection: {
    marginVertical: 20,
    marginHorizontal: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
  },
  label: {
    fontWeight: 'bold',
    color: '#444',
  },
  infoText: {
    fontSize: 16,
    marginBottom: 8,
  },
  profileSection: {
    marginVertical: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  profileButton: {
    backgroundColor: colors.header,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 'auto',
    paddingVertical: 15,
    backgroundColor: '#f8f9fa',
  },
  navItem: {
    padding: 10,
  },
  navText: {
    fontSize: 14,
    color: '#4a90e2',
  },
  nextButton: {
    padding: 10,
    marginTop: 30,
    backgroundColor: colors.header,
    alignItems: 'center',
    borderRadius: 8,
    position: 'static',
    bottom: 10,
    // borderTopLeftRadius: 20,
    // borderBottomRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 6,
  },

  nextButtonText: {
    fontSize: 20,
    color: '#FFFFFF',
  },
});
