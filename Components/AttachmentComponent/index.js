import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Modal,
  ActivityIndicator,
  PermissionsAndroid,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../../assets/res/style/colors';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const Attachment = props => {
  const {
    isAttachmentContentShow,
    setAttachmentContentShow,
    setProfileuri,
    setProfileavatar,
    ...attributes
  } = props;

  //This Funcation Use For Camera Permission
  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs camera permission',
          },
        );
        // If CAMERA Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else return true;
  };

  //This Funcation Use For Storage External Write Permission
  const requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs write permission',
          },
        );
        // If WRITE_EXTERNAL_STORAGE Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        alert('Write permission err', err);
      }
      return false;
    } else return true;
  };

  //This Funcation Use For Camera capture Image show
  const captureImage = async type => {
    setAttachmentContentShow(false);
    const options = {
      maxWidth: 1024,
      maxHeight: 1024,
      quality: 0.9,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    let isCameraPermitted = await requestCameraPermission();
    //let isStoragePermitted = await requestExternalWritePermission();
    console.log('isCameraPermitted=>', isCameraPermitted);
    if (isCameraPermitted) {
      launchCamera(options, response => {
        if (response.didCancel) {
          console.log('User cancelled photo picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          let imgurl_1 = response.assets[0].uri.replace('file://', '');
          let imgurl = {
            uri: response.assets[0].uri,
            type: 'image/jpeg',
            name: response.assets[0].fileName,
          };
          console.log('captureImage', imgurl);
          setProfileuri(imgurl);
          setProfileavatar(response.assets[0].uri);
        }
      });
    }
  };

  //This Funcation Use For Gallery Select file show
  const chooseFile = () => {
    setAttachmentContentShow(false);
    const options = {
      maxWidth: 1024,
      maxHeight: 1024,
      quality: 0.9,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled photo picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let imgurl_1 = response.assets[0].uri.replace('file://', '');
        let imgurl = {
          uri: response.assets[0].uri,
          type: 'image/jpeg',
          name: response.assets[0].fileName,
        };
        console.log('ImageLibrary', imgurl);
        setProfileuri(imgurl);
        setProfileavatar(response.assets[0].uri);
      }
    });
  };

  return (
    <Modal
      animationType="slide"
      visible={isAttachmentContentShow}
      transparent={true}
      onRequestClose={() => {
        setAttachmentContentShow(false);
      }}>
      <SafeAreaView
        onStartShouldSetResponder={() => {
          setAttachmentContentShow(false);
        }}
        style={styles.modalsafearea}>
        <View style={styles.modalcontainer}>
          {attachmentIcons.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.Flatsubcontainer}
              onPress={
                item.name == 'Gallery'
                  ? chooseFile
                  : item.name == 'Camera'
                  ? captureImage
                  : null
              }>
              <MaterialIcon
                name={item.iconName}
                style={styles.DetailsFlatLefticonstyle}
              />
              <Text style={styles.Flattext}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const attachmentIcons = [
  {
    id: 1,
    name: 'Gallery',
    iconName: 'image',
    colorCode: colors.galleryIcon,
  },
  {
    id: 2,
    name: 'Camera',
    iconName: 'camera',
    colorCode: colors.galleryIcon,
  },
];

const styles = StyleSheet.create({
  modalsafearea: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
    opacity: 0.8,
  },
  modalcontainer: {
    flexDirection: 'column',
    paddingTop: '5%',
    borderTopRightRadius: 60,
    borderTopLeftRadius: 60,
    backgroundColor: colors.header,
    //paddingVertical: 50,
    //marginBottom: "12%",
    // height: '100%',
  },
  Flatsubcontainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#dcdcdc',
    marginHorizontal: '5%',
    justifyContent: 'flex-start',
  },
  DetailsFlatLefticonstyle: {
    marginHorizontal: 10,
    fontSize: 35,
    color: colors.white,
    alignSelf: 'center',
  },
  Flattext: {
    fontSize: 18,
    color: colors.white,
    textAlign: 'center',
    //fontFamily: '',
    fontWeight: '700',
  },
});

export default Attachment;
