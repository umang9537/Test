import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import {colors} from '../assets/res/style/colors';
import {Header} from '../Components/NavigationHeader/index';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {useDispatch, useSelector} from 'react-redux';
import {getDashboard} from '../Store/actions';

const Dashboard = props => {
  const {navigation} = props;
  const dispatch = useDispatch();

  // const {dashboardData, dashboardCode} = useSelector(state => ({
  //   dashboardData: state.dashboardreducer.dashboardData,
  //   dashboardCode: state.dashboardreducer.dashboardCode,
  // }));

  // console.log('dashboardData =====>', dashboardData);
  // console.log('dashboardCode =====>', dashboardCode);

  // useEffect(() => {
  //   let reqdata = {
  //     user_id: 1,
  //     profile_id: 2,
  //   };
  //   dispatch(getDashboard(reqdata));
  // }, []);

  return (
    <View style={styles.container}>
      <Header Titel="Dashboard" />

      <View style={{padding: 20}}>
        {/* Upcoming Consultations Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Upcoming Consultations</Text>
          <View style={styles.card}>
            <View style={[styles.cardContent, {bottom: 25}]}>
              <Text style={styles.label}>Dr. Marta Juarez</Text>
              <Text>Dr. Hans Gerhoff</Text>
            </View>

            <View style={styles.iconContent}>
              <FontAwesome
                name="stethoscope"
                size={40}
                color="#7D4CC1"
                style={{padding: 20}}
              />
              <Text style={styles.iconText}>2</Text>
            </View>
          </View>
        </View>

        {/* Medical Files Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Medical Files</Text>
          <View style={styles.card}>
            <View style={styles.cardContent}>
              <Text style={styles.label}>Blood tests.pdf</Text>
              <Text style={styles.label}>Cardiology results.pdf</Text>
              <Text style={styles.label}>Blood tests 20-02-2020.pdf</Text>
              <Text style={styles.label}>MRI results.pdf</Text>
            </View>

            <View style={styles.iconContent}>
              <MaterialIcons
                name="file-document-outline"
                size={40}
                color="#7D4CC1"
                style={{padding: 20}}
              />
              <Text style={styles.iconText}>7</Text>
            </View>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.actionButton}>
            <FontAwesome name="plus-circle" size={50} color="#7D4CC1" />
            <Text style={styles.buttonText}>Schedule</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>
            <FontAwesome name="phone" size={50} color="#7D4CC1" />
            <Text style={styles.buttonText}>Call</Text>
          </TouchableOpacity>
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
    //paddingBottom: "3%",
  },
  section: {
    marginBottom: 40,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4A4A4A',
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 3, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  cardContent: {
    flex: 1,
  },
  iconContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: -25,
  },
  iconText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#7D4CC1',
    marginTop: 5,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    backgroundColor: '#fff',
    paddingVertical: '7%',
    paddingHorizontal: '15%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    elevation: 3, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
  },
  buttonText: {
    color: '#7D4CC1',
    marginTop: 5,
  },
  label: {
    fontSize: 16,
  },
});

export default Dashboard;
