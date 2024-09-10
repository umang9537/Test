import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

const SignInScreen = () => {
  //Login With Google
  const LoginWithGoogle = async () => {
    try {
      GoogleSignin.configure({
        // offlineAccess: true,
        // webClientId:
        //   '1079845553478-rm5hk5ihjuk6s7gfjc90gbkda7gi9mdm.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
      });
      await GoogleSignin.signOut();
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('Google Login Info =======', userInfo);
      if (userInfo) {
        Alert.alert('Login Successfully');
        if (userInfo) {
          let user = userInfo.user;
        } else {
          TostMessage('Something went wrong');
        }
      }
    } catch (error) {
      Alert.alert(error.message);
      TostMessage('Something went wrong');
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        console.log('User cancelled the login flows ====>', error.message);
        //Alert.alert("User cancelled the login flows");
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (f.e. sign in) is in progress already
        console.log('Signin in progress ====>', error.message);
        //Alert.alert("Signin in progress");
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        //play services not available or outdated
        console.log('Play services not available ====>', error.message);
        //Alert.alert("Play services not available");
      } else {
        //some other error happened
        console.log('some other error happened ====>', error.message);
        //Alert.alert("some other error happened");
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      <TouchableOpacity style={styles.buttonFacebook}>
        <Icon name="facebook" size={24} color="#fff" />
        <Text style={styles.buttonText}>Sign in with Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonGoogle}
        onPress={() => LoginWithGoogle()}>
        <Icon name="google" size={24} color="#fff" />
        <Text style={styles.buttonText}>Sign in with Google</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    marginBottom: 40,
    fontWeight: 'bold',
    color: '#333',
  },
  buttonFacebook: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3b5998',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    width: '80%',
    justifyContent: 'center',
  },
  buttonGoogle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#db4437',
    padding: 10,
    borderRadius: 5,
    width: '80%',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 10,
  },
});

export default SignInScreen;
