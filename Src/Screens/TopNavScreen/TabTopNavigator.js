import React, {Component} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {
  MenuProvider,
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

import ChatScreen from './ChatScreens/ChatScreen';
import StatusScreen from './StatusScreen';
import CallsScreen from './CallsScreen';
import CameraScreen from './CameraScreen';

const Tab = createMaterialTopTabNavigator();

class TabTopNavigator extends Component {
  render() {
    return (
      <>
        <MenuProvider style={{flex: 1}}>
          <View style={StyleName.Container}>
            <View style={StyleName.view1}>
              <Text style={{fontSize: 20, color: '#ffffff'}}>WhatsApp</Text>
            </View>
            <View style={StyleName.view4}>
              <TextInput style={{fontSize: 18, color: '#ffffff'}}> </TextInput>
            </View>
            <View style={StyleName.view2}>
              <Ionicons
                name="md-search-outline"
                size={25}
                color={'#ffffff'}
                onPress={() => {
                  Alert.alert('Search Button Clicked');
                }}
              />
            </View>
            {/* <ScrollView> */}
            <View>
              {/* <MenuProvider> */}
              <View>
                <Menu style={StyleName.Menu}>
                  <MenuTrigger>
                    <View style={StyleName.view3}>
                      <Ionicons
                        name="md-ellipsis-vertical-sharp"
                        size={25}
                        color={'#ffffff'}
                      />
                    </View>
                  </MenuTrigger>
                  <MenuOptions style={StyleName.MenuOptions}>
                    <MenuOption
                      onSelect={() => alert(`New group`)}
                      style={StyleName.MenuOption}>
                      <Text style={{color: '#000000', fontSize: 16}}>
                        New group
                      </Text>
                    </MenuOption>
                    <MenuOption
                      onSelect={() => alert(`New broadcast`)}
                      style={StyleName.MenuOption}>
                      <Text style={{color: '#000000', fontSize: 16}}>
                        New broadcast
                      </Text>
                    </MenuOption>
                    <MenuOption style={StyleName.MenuOption}>
                      <Text
                        style={{color: '#000000', fontSize: 16}}
                        onPress={() =>
                          this.props.navigation.navigate('LinkDeviceBarCode')
                        }>
                        Linked devices
                      </Text>
                    </MenuOption>
                    <MenuOption
                      onSelect={() => alert(`Starred messages`)}
                      style={StyleName.MenuOption}>
                      <Text style={{color: '#000000', fontSize: 16}}>
                        Starred messages
                      </Text>
                    </MenuOption>
                    <MenuOption
                      onSelect={() => alert(`Payments`)}
                      style={StyleName.MenuOption}>
                      <Text style={{color: '#000000', fontSize: 16}}>
                        Payments
                      </Text>
                    </MenuOption>
                    <MenuOption style={StyleName.MenuOption}>
                      <Text
                        style={{color: '#000000', fontSize: 16}}
                        onPress={() =>
                          this.props.navigation.navigate('SettingScreen')
                        }>
                        Settings
                      </Text>
                    </MenuOption>
                  </MenuOptions>
                </Menu>
              </View>
            </View>
          </View>
          {/* Below only TOP Tap Naviagtion Screens are Given */}
          <Tab.Navigator
            initialLayout="CHATS"
            initialRouteName="CHATS"
            screenOptions={{
              tabBarLabelStyle: {fontSize: 15, color: '#ffffff'},
              tabBarItemStyle: {marginTop: 5},
              tabBarStyle: {
                backgroundColor: '#008069',
                borderBottomColor: '#ffffff',
              },
            }}>
            <Tab.Screen
              name=" "
              component={CameraScreen}
              options={{
                tabBarLabel: () => {
                  return null;
                },
                tabBarIcon: () => (
                  <Icon name="camera" size={20} color={'#ffffff'} />
                ),
              }}
            />
            <Tab.Screen name="CHATS" component={ChatScreen} />
            <Tab.Screen name="STATUS" component={StatusScreen} />
            <Tab.Screen name="CALLS" component={CallsScreen} />
          </Tab.Navigator>
          {console.log()}
        </MenuProvider>
      </>
    );
  }
}

const StyleName = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#008069',
    maxHeight: '8%',
    flexDirection: 'row',
  },
  view1: {
    marginLeft: 20,
  },
  view2: {marginRight: 10},
  view3: {
    marginLeft: 0,
  },
  view4: {
    flex: 1,
    width: 500,
  },
  Menu: {
    padding: 5,
  },
  MenuOptions: {
    padding: 5,
  },
  MenuOption: {
    paddingBottom: 15,
    marginLeft: 10,
  },
  FloatingActionButtonStyle: {
    position: 'absolute',
    width: 55,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    right: 80,
    bottom: 15,
    backgroundColor: '#00a884',
    borderRadius: 200 / 2,
    borderColor: 'gray',
    borderWidth: 0.5,
  },
});
export default TabTopNavigator;
