import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image,
  Linking,
} from 'react-native';

class WelcomeScreen extends Component {
  render() {
    return (
      <View style={StyleName.Container}>
        <View style={StyleName.view1}>
          <Text style={{fontSize: 35, color: '#008069'}}>
            Welcome to WhatsApp
          </Text>
        </View>
        <View style={StyleName.view2}>
          <Image
            source={require('./Images/initImg.jpg')}
            style={{width: 280, height: 280}}
          />
        </View>
        <View style={StyleName.view3}>
          <Text style={StyleName.view3Text}>
            Read Our
            <Text
              style={{color: '#0c71f5', marginLeft: 10}}
              onPress={() => {
                Linking.openURL('https://faq.whatsapp.com/?lang=en');
              }}>
              {'  '}Privacy Policy
            </Text>
            . Tap "Agree and Continue" to accept the
            <Text
              style={{color: '#0c71f5', marginLeft: 10}}
              onPress={() => {
                Linking.openURL(
                  'https://www.whatsapp.com/legal/updates/privacy-policy/?lang=en',
                );
              }}>
              {'  '}Terms and Services
            </Text>
          </Text>
        </View>
        <View style={StyleName.view4}>
          <TouchableHighlight
            style={StyleName.view4Btn}
            onPress={() => this.props.navigation.navigate('PhoneNumberVerify')}>
            <Text style={{fontSize: 17, color: '#ffffff'}}>
              AGREE AND CONTINUE
            </Text>
          </TouchableHighlight>
        </View>
        <View style={StyleName.view5}>
          <Text>From</Text>
          <Text
            style={{
              fontSize: 15,
              color: '#008069',
              letterSpacing: 2,
              marginTop: 10,
            }}>
            FACEBOOK
          </Text>
        </View>
      </View>
    );
  }
}
export default WelcomeScreen;

const StyleName = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    padding: 15,
  },
  view1: {
    flex: 0.2,
  },
  view2: {
    flex: 0.5,
  },
  view3: {
    flex: 0.1,
  },
  view3Text: {
    textAlign: 'center',
  },
  view4: {
    flex: 0.1,
    alignItems: 'baseline',
  },
  view4Btn: {
    height: 45,
    width: 360,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#008069',
    borderRadius: 6,
  },
  view5: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
