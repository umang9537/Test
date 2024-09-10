import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {colors} from '../assets/res/style/colors';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Button, TextInput, TouchableRipple} from 'react-native-paper';
import {Dropdown} from 'react-native-element-dropdown';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Modal from 'react-native-modal';
import Attachment from '../Components/AttachmentComponent';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';

const EditProfile = props => {
  const {navigation} = props;

  const data = [
    {label: 'Male', value: 'Male'},
    {label: 'Female', value: 'Female'},
  ];

  const [Name, setName] = useState(null);
  const [Gender, setGender] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [BirthDate, setBirthDate] = useState(null);

  const [isAttachmentContentShow, setAttachmentContentShow] = useState(false);
  let [Imageuri, setImageuri] = useState(null);
  let [Imageavatar, setImageavatar] = useState(null);
  const [date, setDate] = useState(new Date());
  const [OpenDate, setOpenDate] = useState(false);

  const [Time, setTime] = useState(new Date());
  const [OpenTime, setOpenTime] = useState(false);

  const handleModalSubmit = () => {
    let RquestData = {
      user_firstname: userdata.user_firstname,
      user_lastname: userdata.user_lastname,
      user_answer: answer,
      security_question: value,
      user_password: oldPassword,
      password: newPassword,
      confirm_password: confirmPassword,
      reason: reasonText,
    };
  };

  const handleAnswer = e => {
    setName(e);
  };

  return (
    <>
      <View style={styles.header} onPress={() => console.log('called')}>
        <TouchableOpacity>
          <MaterialIcon
            size={26}
            name="arrow-left"
            color={'white'}
            onPress={() => navigation.goBack()}
          />
        </TouchableOpacity>
        <View>
          <Text style={styles.headerTitle}>Edit Perofile</Text>
        </View>
      </View>

      <View style={styles.container}>
        <View style={{gap: 20}}>
          <TextInput
            mode="outlined"
            style={styles.input}
            outlineColor="white"
            activeOutlineColor="white"
            onChangeText={e => handleAnswer(e)}
            value={Name}
            placeholder="Name"
            outlineStyle={{borderRadius: 10}}
            textColor={colors.header}
          />

          <Dropdown
            style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={'Select Your Gender'}
            searchPlaceholder="Search..."
            value={Gender}
            // onFocus={() => setIsFocus(true)}
            // onBlur={() => setIsFocus(false)}
            onChange={item => {
              setGender(item.value);
            }}
            itemTextStyle={{color: 'black'}}
          />

          <TouchableOpacity
            style={styles.Touchopacitystyle}
            onPress={() => setAttachmentContentShow(!isAttachmentContentShow)}>
            <TextInput
              mode="outlined"
              disabled={true}
              style={styles.input}
              outlineColor="white"
              activeOutlineColor="white"
              onChangeText={e => handleConfirmPassword(e)}
              placeholder="Choose Profile Picture"
              outlineStyle={{borderRadius: 10}}
              textColor={colors.header}
              right={
                <TextInput.Icon
                  icon={'folder'}
                  onPress={() =>
                    setAttachmentContentShow(!isAttachmentContentShow)
                  }
                />
              }
            />
          </TouchableOpacity>

          {/* <Image
            source={Imageavatar ? {uri: Imageavatar} : null}
            style={styles.imageStyle}
          /> */}

          <TouchableOpacity
            style={styles.Touchopacitystyle}
            onPress={() => setOpenDate(true)}>
            <TextInput
              mode="outlined"
              disabled={true}
              style={styles.input}
              outlineColor="white"
              activeOutlineColor="white"
              onChangeText={e => handleConfirmPassword(e)}
              placeholder="Date Of Birth"
              outlineStyle={{borderRadius: 10}}
              textColor={colors.header}
              value={BirthDate}
              right={
                <TextInput.Icon
                  icon={'calendar-outline'}
                  onPress={() => setOpenDate(true)}
                />
              }
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.Touchopacitystyle}
            onPress={() => setOpenTime(true)}>
            <TextInput
              mode="outlined"
              disabled={true}
              style={styles.input}
              outlineColor="white"
              activeOutlineColor="white"
              onChangeText={e => handleConfirmPassword(e)}
              placeholder="Time"
              outlineStyle={{borderRadius: 10}}
              textColor={colors.header}
              value={Time}
              right={
                <TextInput.Icon
                  icon={'clock-time-eight-outline'}
                  onPress={() => setOpenTime(true)}
                />
              }
            />
          </TouchableOpacity>
        </View>

        <Attachment
          isAttachmentContentShow={isAttachmentContentShow}
          setAttachmentContentShow={setAttachmentContentShow}
          setProfileuri={setImageuri}
          setProfileavatar={setImageavatar}
        />

        <DatePicker
          modal
          mode={'date'}
          open={OpenDate}
          date={date}
          onConfirm={date => {
            setOpenDate(false);
            setBirthDate(moment(date, 'DD-MM-YYYY').format('DD/MM/YYYY'));
          }}
          onCancel={() => {
            setOpenDate(false);
          }}
          minimumDate={new Date('1900-05-01')}
          maximumDate={new Date()}
        />

        <DatePicker
          modal
          mode={'time'}
          open={OpenTime}
          date={date}
          onConfirm={date => {
            setOpenTime(false);
            setTime(moment(date, 'HH:mm:ss').format('hh:mm A'));
          }}
          onCancel={() => {
            setOpenDate(false);
          }}
        />

        <View style={styles.buttoncontainer}>
          <TouchableRipple
            style={styles.button}
            onPress={() => console.log('Save Successfully')}>
            <Text style={styles.btnText}>Save</Text>
          </TouchableRipple>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    position: 'relative',
  },
  container: {
    flex: 1,
    padding: 15,
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
    // justifyContent: 'space-between',
  },
  headerTitle: {
    color: colors.headerTitle,
    fontSize: 20,
    fontWeight: '700',
  },
  input: {
    fontSize: 20,
    color: colors.header,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 6,
    borderRadius: 10,
    backgroundColor: 'white',
    fontWeight: '600',
  },

  dropdown: {
    height: 55,
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 6,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 20,
    color: 'black',
  },
  placeholderStyle: {
    fontSize: 20,
    color: 'black',
    backgroundColor: 'white',
  },
  selectedTextStyle: {
    fontSize: 20,
    color: colors.header,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    color: 'black',
  },
  button: {
    backgroundColor: colors.header,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 6,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 50,
    borderRadius: 8,
    // borderBottomRightRadius: 20,
    // borderTopLeftRadius: 20,
  },
  buttoncontainer: {
    width: '100%',
    position: 'absolute',
    bottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    left: 15,
  },
  btnText: {
    fontWeight: '700',
    fontSize: 20,
    color: 'white',
  },
  imageStyle: {
    width: 200,
    height: 200,
    margin: 5,
  },
});

export default EditProfile;
