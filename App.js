import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import WelcomeScreen from './Src/Screens/LoginScreens/WelcomeScreen';
import PhoneNumberVerify from './Src/Screens/LoginScreens/PhoneNumberVerify';
import CoutriesINflatlist from './Src/Screens/LoginScreens/CoutriesINflatlist';
import ChatScreen from './Src/Screens/TopNavScreen/ChatScreens/ChatScreen';
import TabTopNavigator from './Src/Screens/TopNavScreen/TabTopNavigator';
import MessagesList from './Src/Screens/TopNavScreen/ChatScreens/MessagesList';
import LinkDeviceBarCode from './Src/Screens/TopNavScreen/ChatScreens/LinkDevicePopupMenu/LinkDeviceBarCode';
import CameraScreen from './Src/Screens/TopNavScreen/CameraScreen';
import SettingScreen from './Src/Screens/TopNavScreen/ChatScreens/SettingScreens/SettingScreen';
import STNinsideAccount from './Src/Screens/TopNavScreen/ChatScreens/SettingScreens/STNinsideAccount';
import STNinsideChat from './Src/Screens/TopNavScreen/ChatScreens/SettingScreens/STNinsideChat';
import STNinsideNotification from './Src/Screens/TopNavScreen/ChatScreens/SettingScreens/STNinsideNotification';
import STNinsideStorge from './Src/Screens/TopNavScreen/ChatScreens/SettingScreens/STNinsideStorge';
import STNinsideHelp from './Src/Screens/TopNavScreen/ChatScreens/SettingScreens/STNinsideHelp';

const Stack = createNativeStackNavigator();

class App extends Component {
  render() {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="WelcomeScreen">
            <Stack.Screen
              name="WelcomeScreen"
              component={WelcomeScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="TabTopNavigator"
              component={TabTopNavigator}
              options={{headerShown: false}}
            />

            <Stack.Screen
              name="PhoneNumberVerify"
              component={PhoneNumberVerify}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="ChatScreen"
              component={ChatScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="MessagesList"
              component={MessagesList}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="LinkDeviceBarCode"
              component={LinkDeviceBarCode}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="CameraScreen"
              component={CameraScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="SettingScreen"
              component={SettingScreen}
              options={{
                headerShown: true,
                headerTitle: 'Settings',
                headerStyle: {backgroundColor: '#008069'},
                headerTintColor: '#fff',
              }}
            />
            <Stack.Screen
              name="STNinsideAccount"
              component={STNinsideAccount}
              options={{
                headerShown: true,
                headerTitle: 'Accounts',
                headerStyle: {backgroundColor: '#008069'},
                headerTintColor: '#fff',
              }}
            />
            <Stack.Screen
              name="STNinsideChat"
              component={STNinsideChat}
              options={{
                headerShown: true,
                headerTitle: 'Chats',
                headerStyle: {backgroundColor: '#008069'},
                headerTintColor: '#fff',
              }}
            />
            <Stack.Screen
              name="STNinsideNotification"
              component={STNinsideNotification}
              options={{
                headerShown: true,
                headerTitle: 'Notification',
                headerStyle: {backgroundColor: '#008069'},
                headerTintColor: '#fff',
              }}
            />
            <Stack.Screen
              name="STNinsideStorge"
              component={STNinsideStorge}
              options={{
                headerShown: true,
                headerTitle: 'Storge and data',
                headerStyle: {backgroundColor: '#008069'},
                headerTintColor: '#fff',
              }}
            />
            <Stack.Screen
              name="STNinsideHelp"
              component={STNinsideHelp}
              options={{
                headerShown: true,
                headerTitle: 'Help',
                headerStyle: {backgroundColor: '#008069'},
                headerTintColor: '#fff',
              }}
            />
            <Stack.Screen
              name="CoutriesINflatlist"
              component={CoutriesINflatlist}
              options={{
                headerShown: true,
                headerTitle: 'Select a Country',
                headerStyle: {backgroundColor: '#008069'},
                headerTintColor: '#fff',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }
}

export default App;
