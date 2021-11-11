import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import WelcomeScreen from './Screens/WelcomeScreen';
import PhoneNumberVerify from './Screens/PhoneNumberVerify';
import ChatScreen from './Screens/ChatScreen';
import TabTopNavigator from './Screens/TabTopNavigator';
import MessagesList from './Screens/MessagesList';
import LinkDeviceBarCode from './Screens/LinkDeviceBarCode';
import CameraScreen from './Screens/CameraScreen';
import SettingScreen from './Screens/SettingScreen';
import STNinsideAccount from './Screens/STNinsideAccount';
import STNinsideChat from './Screens/STNinsideChat';
import STNinsideNotification from './Screens/STNinsideNotification';
import STNinsideStorge from './Screens/STNinsideStorge';
import STNinsideHelp from './Screens/STNinsideHelp';

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
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }
}

export default App;
