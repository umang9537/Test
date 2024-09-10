import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  StatusBar,
  StyleSheet,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../assets/res/style/colors';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';

export const Header = props => {
  const {Titel} = props;

  return (
    <>
      <StatusBar backgroundColor={'#7D4CC1'} barStyle={colors.statusbarcolor} />
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>{Titel}</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.icon}>
            <MaterialIcon name="bell-outline" size={24} color="#fff" />
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.icon}>
            <MaterialIcon name="dots-vertical" size={24} color="#fff" />
          </TouchableOpacity> */}

          <Menu>
            <MenuTrigger>
              <MaterialIcon
                name="dots-vertical"
                size={24}
                color="#fff"
                style={styles.icon}
              />
            </MenuTrigger>

            <MenuOptions>
              <MenuOption onSelect={() => console.log('LogOut')}>
                <View style={styles.menuItem}>
                  <Text style={styles.menuText}>Setting</Text>
                  <Ionicons name="cog-outline" style={styles.menuIconStyle} />
                </View>
              </MenuOption>

              <MenuOption onSelect={() => console.log('LogOut')}>
                <View style={styles.menuItem}>
                  <Text style={styles.menuText}>Logout</Text>
                  <Ionicons
                    name="log-out-outline"
                    style={styles.menuIconStyle}
                  />
                </View>
              </MenuOption>
            </MenuOptions>
          </Menu>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: colors.header, // Purple background
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    elevation: 4,
  },
  headerTitle: {
    flex: 1, // Take up available space to allow centering
    color: colors.headerTitle,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center', // Center the text horizontally
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    padding: 10,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  menuText: {
    fontSize: 16,
    color: colors.black,
  },
  menuIconStyle: {
    color: colors.black,
    fontSize: 25,
    marginLeft: 10,
  },
});
