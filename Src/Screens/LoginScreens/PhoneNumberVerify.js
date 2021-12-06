import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Linking,
  KeyboardAvoidingView,
} from 'react-native';
import {
  MenuProvider,
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TextInput} from 'react-native-paper';

class PhoneNumberVerify extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PhoneInputValue: '',
      isLoading: true,
      CountryInputValue: this.props.route.params,
      CountryCodeValue: this.props.route.params,
    };
  }
  componentDidMount() {
    this.props.navigation.addListener('focus', () => {
      if (this.props.route.params !== undefined) {
        let selObj = this.props.route.params.TransferData;
        if (selObj !== undefined) {
          this.setState({CountryInputValue: selObj.name});
          this.setState({CountryCodeValue: selObj.dial_code});
          console.log(selObj.dial_code);
        }
      }
    });
  }

  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: '100%',
        }}
      />
    );
  };
  Validater() {
    if (this.props.route.params == undefined) {
      this.setState(alert('Please Enter Dial Code'));
    } else if (this.state.PhoneInputValue == '') {
      this.setState(alert('Please Enter Your Number'));
    } else if (this.state.PhoneInputValue.length < 10) {
      this.setState(alert('Please Enter Valid Phone Number'));
    } else {
      this.props.navigation.navigate('TabTopNavigator');
    }
  }
  render() {
    return (
      <MenuProvider>
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

          <View style={StyleName.viewCountry}>
            <TouchableHighlight
              onPress={() =>
                this.props.navigation.navigate('CoutriesINflatlist')
              }>
              <TextInput
                dense={true}
                value={this.state.CountryInputValue}
                mode="flat"
                editable={false}
                placeholder="Select a Country"
                selectionColor={'#008069'}
                activeUnderlineColor={'#008069'}
                outlineColor={'#008069'}
                underlineColor={'#008069'}
                activeOutlineColor={'#008069'}
                theme={{colors: {primary: '#008069'}}}
                style={{
                  height: 38,
                  width: '100%',
                  alignSelf: 'center',
                  backgroundColor: '#fff',
                  textAlign: 'center',
                }}
                right={
                  <TextInput.Icon
                    name={() => (
                      <Ionicons
                        name={'caret-down-sharp'}
                        size={20}
                        color={'#008069'}
                      />
                    )}
                  />
                }
                onChangeText={a => this.setState({CountryInputValue: a})}
              />
            </TouchableHighlight>
          </View>
          <View style={StyleName.viewCountryCode}>
            <TouchableHighlight
              style={{
                width: '20%',
              }}
              onPress={() =>
                this.props.navigation.navigate('CoutriesINflatlist')
              }>
              <TextInput
                dense={true}
                value={this.state.CountryCodeValue}
                placeholder={'+91'}
                mode="flat"
                editable={false}
                selectionColor={'#008069'}
                activeUnderlineColor={'#008069'}
                outlineColor={'#008069'}
                underlineColor={'#008069'}
                activeOutlineColor={'#008069'}
                theme={{colors: {primary: '#008069'}}}
                style={{
                  height: 38,
                  backgroundColor: '#fff',
                  textAlign: 'right',
                }}
                onChangeText={a => this.setState({CountryCodeValue: a})}
              />
            </TouchableHighlight>
            <TextInput
              value={this.state.PhoneInputValue}
              maxLength={10}
              placeholder={'Phone number'}
              selectionColor={'#008069'}
              activeUnderlineColor={'#008069'}
              outlineColor={'#008069'}
              underlineColor={'#008069'}
              activeOutlineColor={'#008069'}
              theme={{colors: {primary: '#008069'}}}
              keyboardType="number-pad"
              style={{
                marginLeft: '5%',
                height: 38,
                width: '55%',
                backgroundColor: '#fff',
                textAlign: 'left',
              }}
              onChangeText={a => this.setState({PhoneInputValue: a})}
            />
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
export default PhoneNumberVerify;
const StyleName = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 25,
  },
  view1: {
    flex: 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  view2: {
    flex: 0.1,
    width: '100%',
  },
  view3Text: {
    textAlign: 'center',
    fontSize: 15,
  },
  view4: {
    flex: 0.7,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  view4Btn: {
    height: 45,
    width: 140,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#008069',
    borderRadius: 6,
  },
  textInput: {
    paddingVertical: 0,
  },

  MenuOption: {
    padding: 15,
    marginLeft: 15,
  },
  viewCountry: {
    flex: 0.05,
    width: '80%',
  },
  viewCountryCode: {
    flex: 0.05,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
