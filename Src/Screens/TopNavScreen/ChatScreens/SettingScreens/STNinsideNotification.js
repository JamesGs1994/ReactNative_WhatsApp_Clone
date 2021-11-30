import React, {Component} from 'react';
import {View, SafeAreaView, StyleSheet, ScrollView, Switch} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

class STNinsideNotification extends Component {
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
              <TouchableRipple>
                <View style={styles.menuItem}>
                  <View style={styles.menuItemTEXTview}>
                    <Text style={styles.menuItemText}>Conversation tones</Text>
                    <Text style={{color: 'gray'}}>
                      Play sounds incoming and outgoing messages
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

              <View style={styles.menuItem}>
                <View style={styles.menuItemTEXTview}>
                  <Text style={{color: 'gray'}}>messages</Text>
                </View>
              </View>

              <TouchableRipple onPress={() => {}}>
                <View style={styles.menuItem}>
                  <View style={styles.menuItemTEXTview}>
                    <Text style={styles.menuItemText}>Notification tone</Text>
                    <Text style={{color: 'gray'}}>Tones</Text>
                  </View>
                </View>
              </TouchableRipple>
              <TouchableRipple onPress={() => {}}>
                <View style={styles.menuItem}>
                  <View style={styles.menuItemTEXTview}>
                    <Text style={styles.menuItemText}>Vibrate</Text>
                    <Text style={{color: 'gray'}}>Default</Text>
                  </View>
                </View>
              </TouchableRipple>
              <TouchableRipple onPress={() => {}}>
                <View style={styles.menuItem}>
                  <View style={styles.menuItemTEXTview}>
                    <Text style={{color: 'gray'}}>Popup notification</Text>
                    <Text style={{color: 'gray'}}>Not avilable</Text>
                  </View>
                </View>
              </TouchableRipple>
              <TouchableRipple onPress={() => {}}>
                <View style={styles.menuItem}>
                  <View style={styles.menuItemTEXTview}>
                    <Text style={styles.menuItemText}>Light</Text>
                    <Text style={{color: 'gray'}}>White</Text>
                  </View>
                </View>
              </TouchableRipple>
              <TouchableRipple>
                <View style={styles.menuItem}>
                  <View style={styles.menuItemTEXTview}>
                    <Text style={styles.menuItemText}>
                      Use high priority notifications
                    </Text>
                    <Text style={{color: 'gray'}}>
                      Show previews of notifications at the top of screen
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
              <View style={styles.menuItem}>
                <View style={styles.menuItemTEXTview}>
                  <Text style={{color: 'gray'}}>Groups</Text>
                </View>
              </View>
              <TouchableRipple onPress={() => {}}>
                <View style={styles.menuItem}>
                  <View style={styles.menuItemTEXTview}>
                    <Text style={styles.menuItemText}>Notification tone</Text>
                    <Text style={{color: 'gray'}}>Tones</Text>
                  </View>
                </View>
              </TouchableRipple>
              <TouchableRipple onPress={() => {}}>
                <View style={styles.menuItem}>
                  <View style={styles.menuItemTEXTview}>
                    <Text style={styles.menuItemText}>Vibrate</Text>
                    <Text style={{color: 'gray'}}>Default</Text>
                  </View>
                </View>
              </TouchableRipple>
              <TouchableRipple onPress={() => {}}>
                <View style={styles.menuItem}>
                  <View style={styles.menuItemTEXTview}>
                    <Text style={styles.menuItemText}>Light</Text>
                    <Text style={{color: 'gray'}}>White</Text>
                  </View>
                </View>
              </TouchableRipple>
              <TouchableRipple>
                <View style={styles.menuItem}>
                  <View style={styles.menuItemTEXTview}>
                    <Text style={styles.menuItemText}>
                      Use high priority notifications
                    </Text>
                    <Text style={{color: 'gray'}}>
                      Show previews of notifications at the top of screen
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
              <View style={styles.menuItem}>
                <View style={styles.menuItemTEXTview}>
                  <Text style={{color: 'gray'}}>Calls</Text>
                </View>
              </View>
              <TouchableRipple onPress={() => {}}>
                <View style={styles.menuItem}>
                  <View style={styles.menuItemTEXTview}>
                    <Text style={styles.menuItemText}>Ringtone</Text>
                    <Text style={{color: 'gray'}}>
                      Default songs as you like
                    </Text>
                  </View>
                </View>
              </TouchableRipple>
              <TouchableRipple onPress={() => {}}>
                <View style={styles.menuItem}>
                  <View style={styles.menuItemTEXTview}>
                    <Text style={styles.menuItemText}>Vibrate</Text>
                    <Text style={{color: 'gray'}}>Default</Text>
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
export default STNinsideNotification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  AllView: {
    height: '70%', // 70% of height device screen
    width: '100%', // 80% of width device screen
  },
  userInfoSection: {
    width: '100%',
    padding: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  menuWrapper: {
    width: '100%',
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 13,
    paddingHorizontal: 30,
  },
  menuItemTEXTview: {
    marginLeft: 15,
    width: '85%',
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
