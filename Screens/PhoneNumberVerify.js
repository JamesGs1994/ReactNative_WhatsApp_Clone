import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Linking,
} from 'react-native';
import {
  MenuProvider,
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import PhoneInput from 'react-native-phone-number-input';
import Ionicons from 'react-native-vector-icons/Ionicons';

class PhoneNumberVerify extends Component {
  state = {
    InputValue: '',
  };

  Validater() {
    if (this.state.InputValue == '') {
      this.setState(alert('Please Enter Your Number'));
    } else {
      this.props.navigation.navigate('TabTopNavigator');
    }
  }
  render() {
    return (
      <MenuProvider style={{flex: 1}}>
        <View style={StyleName.Container}>
          <View style={StyleName.view1}>
            <Text
              style={{
                fontSize: 23,
                color: '#008069',
                marginLeft: 90,
                marginRight: 40,
                fontWeight: 'bold',
              }}>
              Enter Your Phone Number
            </Text>

            <Menu style={StyleName.Menu}>
              <MenuTrigger>
                <View
                  style={{
                    fontSize: 21,
                    color: '#008069',
                  }}>
                  <Ionicons
                    name="md-ellipsis-vertical-sharp"
                    size={25}
                    color={'black'}
                  />
                </View>
              </MenuTrigger>
              <MenuOptions style={StyleName.MenuOptions}>
                <MenuOption
                  onSelect={() => alert(`currently, No Help is availabe `)}
                  style={StyleName.MenuOption}>
                  <Text style={{color: '#000000', fontSize: 16}}>Help</Text>
                </MenuOption>
              </MenuOptions>
            </Menu>
          </View>
          <View style={StyleName.view2}>
            <Text style={StyleName.view3Text}>
              Whatsapp will need to verify you phone number.
              <Text
                style={{color: '#0c71f5'}}
                onPress={() => {
                  Linking.openURL(
                    'https://faq.whatsapp.com/iphone/account-and-profile/how-to-change-your-phone-number/?lang=en',
                  );
                }}>
                What's {'               '}my Number
              </Text>
            </Text>
          </View>
          <View style={StyleName.view3}>
            <PhoneInput
              onChangeText={text => this.setState({InputValue: text})}
              defaultCode="IN"
              layout="first"
              keyboardType="numeric"
              withShadow
              autoFocus
              containerStyle={StyleName.phoneContainer}
              textContainerStyle={StyleName.textInput}
              onPressFlag={this.onPressFlag}
            />
            <Text style={StyleName.view3Text}>Charrier charges may apply</Text>
          </View>

          <View style={StyleName.view4}>
            <TouchableHighlight
              style={StyleName.view4Btn}
              onPress={() => {
                this.Validater();
              }}>
              <Text style={{fontSize: 17, color: '#ffffff'}}> NEXT </Text>
            </TouchableHighlight>
          </View>
        </View>
      </MenuProvider>
    );
  }
}

const StyleName = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 15,
  },
  view1: {
    flex: 0.1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  view2: {
    flex: 0.1,
  },
  view3: {
    flex: 0.1,
  },
  view3Text: {
    textAlign: 'center',
    fontSize: 15,
  },
  view4: {
    flex: 0.5,
    justifyContent: 'flex-end',
  },
  view4Btn: {
    height: 45,
    width: 140,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#008069',
    borderRadius: 6,
  },
  phoneContainer: {
    width: '75%',
    height: 50,
    marginBottom: 15,
  },
  button: {
    marginTop: 30,
    width: '75%',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  textInput: {
    paddingVertical: 0,
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
});

export default PhoneNumberVerify;
