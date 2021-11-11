import React, {Component} from 'react';
import {View, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import {
  Switch,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Octicons from 'react-native-vector-icons/Octicons';

class STNinsideChat extends Component {
  state = {
    switchValue1: true,
    switchValue2: true,
    switchValue3: false,
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.AllView}>
            <View style={styles.menuWrapper}>
              <View style={styles.menuItem1}>
                <Text style={{color: 'gray', fontSize: 17}}>Display</Text>
              </View>
              <TouchableRipple onPress={() => {}}>
                <View style={styles.menuItem}>
                  <View>
                    <Fontisto name="locked" color="gray" size={20} />
                  </View>
                  <View style={styles.menuItemTEXTview}>
                    <Text style={styles.menuItemText}>Theme</Text>
                    <Text style={{color: 'gray'}}>System default</Text>
                  </View>
                </View>
              </TouchableRipple>
              <TouchableRipple onPress={() => {}}>
                <View style={styles.menuItem}>
                  <MaterialCommunityIcons
                    name="wallpaper"
                    color="gray"
                    size={25}
                  />
                  <View style={styles.menuItemTEXTview}>
                    <Text style={styles.menuItemText}>Wallpaper</Text>
                  </View>
                </View>
              </TouchableRipple>
              <View
                style={[
                  styles.menuItem1,
                  {borderTopWidth: 0.2, borderTopColor: 'gray'},
                ]}>
                <Text style={{color: 'gray', fontSize: 17}}>Chat settings</Text>
              </View>
              <TouchableRipple>
                <View style={styles.menuItem}>
                  <View style={styles.menuItemTEXTview}>
                    <Text style={styles.menuItemText}>Enter is send</Text>
                    <Text style={{color: 'gray'}}>
                      Enter key will send your message
                    </Text>
                  </View>
                  <View style={{alignItems: 'flex-end'}}>
                    <Switch
                      value={this.state.switchValue1}
                      onValueChange={switchValue1 =>
                        this.setState({switchValue1})
                      }
                    />
                  </View>
                </View>
              </TouchableRipple>
              <TouchableRipple>
                <View style={styles.menuItem}>
                  <View style={styles.menuItemTEXTview}>
                    <Text style={styles.menuItemText}>Media visibility</Text>
                    <Text style={{color: 'gray'}}>
                      Show newly downloaded media in your phone's gallery
                    </Text>
                  </View>
                  <View style={{alignItems: 'flex-end'}}>
                    <Switch
                      value={this.state.switchValue2}
                      onValueChange={switchValue2 =>
                        this.setState({switchValue2})
                      }
                    />
                  </View>
                </View>
              </TouchableRipple>
              <TouchableRipple onPress={() => {}}>
                <View style={styles.menuItem}>
                  <View style={styles.menuItemTEXTview}>
                    <Text style={styles.menuItemText}>Font size</Text>
                    <Text style={{color: 'gray'}}>Medium</Text>
                  </View>
                </View>
              </TouchableRipple>
              <View
                style={[
                  styles.menuItem1,
                  {borderTopWidth: 0.2, borderTopColor: 'gray'},
                ]}>
                <Text style={{color: 'gray', fontSize: 17}}>
                  Archived chats
                </Text>
              </View>
              <TouchableRipple>
                <View style={styles.menuItem}>
                  <View style={styles.menuItemTEXTview}>
                    <Text style={styles.menuItemText}>Keep chats archived</Text>
                    <Text style={{color: 'gray'}}>
                      Show newly downloaded media in your phone's gallery
                    </Text>
                  </View>
                  <View style={{alignItems: 'flex-end'}}>
                    <Switch
                      value={this.state.switchValue3}
                      onValueChange={switchValue3 =>
                        this.setState({switchValue3})
                      }
                    />
                  </View>
                </View>
              </TouchableRipple>
              <TouchableRipple onPress={() => {}}>
                <View style={styles.menuItem}>
                  <View>
                    <MaterialIcons name="language" color="gray" size={20} />
                  </View>
                  <View style={styles.menuItemTEXTview}>
                    <Text style={styles.menuItemText}>App Language</Text>
                    <Text style={{color: 'gray'}}>
                      Phone's language(English)
                    </Text>
                  </View>
                </View>
              </TouchableRipple>
              <TouchableRipple onPress={() => {}}>
                <View style={styles.menuItem}>
                  <MaterialIcons name="backup" color="gray" size={25} />
                  <View style={styles.menuItemTEXTview}>
                    <Text style={styles.menuItemText}>Chat backup</Text>
                  </View>
                </View>
              </TouchableRipple>
              <TouchableRipple onPress={() => {}}>
                <View style={styles.menuItem}>
                  <MaterialCommunityIcons
                    name="history"
                    color="gray"
                    size={25}
                  />
                  <View style={styles.menuItemTEXTview}>
                    <Text style={styles.menuItemText}>Chat history</Text>
                  </View>
                </View>
              </TouchableRipple>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
export default STNinsideChat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  AllView: {
    height: '70%', // 70% of height device screen
    width: '100%', // 80% of width device screen
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  menuWrapper: {
    width: '100%',
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 20,
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  menuItem1: {
    flexDirection: 'row',
    paddingLeft: 20,
    paddingTop: 15,
  },
  menuItemTEXTview: {
    marginLeft: 25,
    width: '80%',
  },
  menuItemText: {
    color: '#000000',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 26,
  },
  view5: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
});
