import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ImageBackground,
  TextInput,
  FlatList,
  Button,
} from 'react-native';
import Menu, {
  MenuProvider,
  MenuTrigger,
  MenuOptions,
  MenuOption,
  renderers,
} from 'react-native-popup-menu';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id: 1, date: '9:50 am', type: 'in', message: 'Hai'},
        {id: 2, date: '10:01 am', type: 'out', message: 'Hey'},
        {id: 3, date: '11:50 am', type: 'in', message: 'Good Morning'},
        {id: 4, date: '12:00 am', type: 'in', message: 'How are You...?'},
        {id: 5, date: '1:23 pm', type: 'out', message: 'Fine !!!'},
        {id: 6, date: '1:50 pm', type: 'out', message: 'How About You'},
        {
          id: 7,
          date: '2:50 pm',
          type: 'in',
          message: 'Your Invited for Something',
        },
        {
          id: 8,
          date: '3:23 pm',
          type: 'in',
          message: 'You Must Attend this Event ',
        },
        {id: 9, date: '4:50 pm', type: 'in', message: "Don't Miss it !!!"},
        {
          id: 10,
          date: '5:30 pm',
          type: 'out',
          message: 'Sure !!! I will make the time and will Participate it',
        },
        {id: 11, date: '6:50 pm', type: 'in', message: 'Okay Cool Nice'},
        {id: 12, date: '7:50 pm', type: 'out', message: 'Thank You Buddy'},
        {id: 13, date: '9:50 pm', type: 'in', message: 'Your Welcome Buddy'},
        {id: 14, date: '1:50 pm', type: 'out', message: 'How About You'},
        {
          id: 15,
          date: '2:50 pm',
          type: 'in',
          message: 'Your Invited for Something',
        },
        {
          id: 16,
          date: '3:23 pm',
          type: 'in',
          message: 'You Must Attend this Event ',
        },
        {id: 17, date: '4:50 pm', type: 'in', message: "Don't Miss it !!!"},
        {
          id: 18,
          date: '5:30 pm',
          type: 'out',
          message: 'Sure !!! I will make the time and will Participate it',
        },
        {id: 19, date: '6:50 pm', type: 'in', message: 'Okay Cool Nice'},
        {id: 20, date: '7:50 pm', type: 'out', message: 'Thank You Buddy'},
        {id: 21, date: '9:50 pm', type: 'in', message: 'Your Welcome Buddy'},
      ],
    };
  }

  renderDate = date => {
    return <Text style={styles.time}>{date}</Text>;
  };
  render() {
    return (
      <MenuProvider style={{flex: 1}}>
        <ImageBackground
          style={styles.imgBackground}
          resizeMode="cover"
          source={require('../../Images/BG.png')}>
          <View style={styles.container}>
            <View style={styles.topbar}>
              <View style={styles.MyStatus}>
                <View style={styles.backspace}>
                  <Icon
                    name="keyboard-backspace"
                    size={25}
                    color={'#ffffff'}
                    onPress={() => {
                      this.props.navigation.goBack();
                    }}
                  />
                </View>
                <View>
                  <Image
                    source={require('../../Images/James.jpg')}
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: 100,
                      marginLeft: 5,
                    }}
                  />
                </View>
                <View style={styles.MyStatusTextView}>
                  <Text style={styles.MyStatusText}>James Gs</Text>
                </View>
                <View style={styles.videocam}>
                  <Icon
                    name="videocam"
                    size={25}
                    color={'#ffffff'}
                    onPress={() => {
                      Alert.alert('Search Button Clicked');
                    }}
                  />
                </View>
                <View style={styles.call}>
                  <Icon
                    name="call"
                    size={25}
                    color={'#ffffff'}
                    onPress={() => {
                      Alert.alert('Search Button Clicked');
                    }}
                  />
                </View>
              </View>

              <View style={{flex: 1}}></View>
              <View>
                <Menu style={styles.Menu}>
                  <MenuTrigger>
                    <View style={styles.view3}>
                      <Ionicons
                        name="md-ellipsis-vertical-sharp"
                        size={25}
                        color={'#ffffff'}
                      />
                    </View>
                  </MenuTrigger>
                  <MenuOptions style={styles.MenuOptions}>
                    <MenuOption
                      onSelect={() => alert(`View contanct`)}
                      style={styles.MenuOption}>
                      <Text style={{color: '#000000', fontSize: 16}}>
                        View contanct
                      </Text>
                    </MenuOption>
                    <MenuOption
                      onSelect={() => alert(`Media, links and docs`)}
                      style={styles.MenuOption}>
                      <Text style={{color: '#000000', fontSize: 16}}>
                        Media, links and docs
                      </Text>
                    </MenuOption>
                    <MenuOption
                      onSelect={() => alert(`Search`)}
                      style={styles.MenuOption}>
                      <Text style={{color: '#000000', fontSize: 16}}>
                        Search
                      </Text>
                    </MenuOption>
                    <MenuOption
                      onSelect={() => alert(`Mute notifications`)}
                      style={styles.MenuOption}>
                      <Text style={{color: '#000000', fontSize: 16}}>
                        Mute notifications
                      </Text>
                    </MenuOption>
                    <MenuOption
                      onSelect={() => alert(`Wallpaper`)}
                      style={styles.MenuOption}>
                      <Text style={{color: '#000000', fontSize: 16}}>
                        Wallpaper
                      </Text>
                    </MenuOption>
                    <MenuOption
                      onSelect={() => alert(`More`)}
                      style={styles.MenuOption}>
                      <Text style={{color: '#000000', fontSize: 16}}>More</Text>
                    </MenuOption>
                  </MenuOptions>
                </Menu>
              </View>
            </View>
            <FlatList
              style={styles.list}
              data={this.state.data}
              keyExtractor={item => {
                return item.id;
              }}
              renderItem={message => {
                // console.log(item);
                const item = message.item;
                let inMessage = item.type === 'in';
                let itemStyle = inMessage ? styles.itemIn : styles.itemOut;
                return (
                  <View style={[styles.item, itemStyle]}>
                    {!inMessage && this.renderDate(item.date)}
                    <View style={[styles.balloon]}>
                      <Text>{item.message}</Text>
                    </View>
                    {inMessage && this.renderDate(item.date)}
                  </View>
                );
              }}
            />
            <View style={styles.footer}>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.inputs}
                  placeholder="Write a message..."
                  underlineColorAndroid="transparent"
                  onChangeText={name_address => this.setState({name_address})}
                />
              </View>
              <TouchableOpacity style={styles.btnSend}>
                <Image
                  source={require('../../Images/Sendarrow.png')}
                  style={styles.iconSend}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </MenuProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  topbar: {
    flexDirection: 'row',
    backgroundColor: '#008069',
    paddingTop: 15,
    alignItems: 'center',
    paddingBottom: 8,
  },
  trigger: {
    padding: 5,
    margin: 5,
  },
  triggerText: {
    color: 'white',
  },
  disabled: {
    color: '#ccc',
  },
  divider: {
    marginVertical: 5,
    marginHorizontal: 2,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  logView: {
    flex: 1,
    flexDirection: 'column',
  },
  logItem: {
    flexDirection: 'row',
    padding: 8,
  },
  slideInOption: {
    padding: 5,
  },
  text: {
    fontSize: 18,
  },
  MyStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#008069',
  },
  MyStatusText: {
    color: '#eeeeee',
    marginBottom: 7,
    fontSize: 20,
  },
  MyStatusTextView: {
    flexDirection: 'column',
    margin: 15,
    alignItems: 'flex-start',
  },
  updates: {
    flexDirection: 'row',
    margin: 5,
    alignItems: 'center',
  },
  MyStatusText: {
    color: '#eeeeee',
    marginBottom: 7,
    fontSize: 20,
  },
  backspace: {
    marginLeft: 5,
    marginRight: 5,
  },
  videocam: {
    marginLeft: 100,
  },
  call: {
    marginLeft: 20,
  },
  ellipsis: {
    marginLeft: 20,
  },
  imgBackground: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
  btnSend: {
    width: 40,
    height: 40,
    borderRadius: 360,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconSend: {
    width: 45,
    height: 45,
    alignSelf: 'center',
  },
  inputs: {
    height: 60,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: 10,
  },
  footer: {
    flexDirection: 'row',
    height: 60,
    paddingHorizontal: 10,
    padding: 5,
  },
  itemIn: {
    alignSelf: 'flex-start',
  },
  itemOut: {
    alignSelf: 'flex-end',
  },
  list: {
    marginTop: 8,
    paddingHorizontal: 10,
  },
  time: {
    alignSelf: 'flex-end',
    margin: 15,
    fontSize: 12,
    color: '#808080',
  },
  item: {
    marginVertical: 3,
    flexDirection: 'row',
    backgroundColor: '#eeeeee',
    borderRadius: 300,
    padding: 1,
  },
  balloon: {
    maxWidth: 250,
    padding: 15,
    borderRadius: 20,
  },
  Menu: {
    padding: 5,
    marginRight: 5,
  },
  MenuOptions: {
    padding: 5,
    marginLeft: 10,
  },
  MenuOption: {
    padding: 10,
  },
});
