import React, {Component} from 'react';
import {View, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
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

class SettingScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.AllView}>
            <TouchableRipple onPress={() => {}}>
              <View style={styles.userInfoSection}>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 15,
                    marginBottom: 15,
                    alignItems: 'center',
                    width: '100%',
                  }}>
                  <Avatar.Image
                    source={require('../../../Images/James.jpg')}
                    size={70}
                  />
                  <TouchableRipple style={{marginLeft: 20, width: '67%'}}>
                    <View>
                      <Title style={[styles.title]}>James Gs</Title>
                      <Caption style={[styles.caption]}>
                        ✌“Learn Something New !!!”
                      </Caption>
                    </View>
                  </TouchableRipple>
                  <MaterialCommunityIcons
                    name="qrcode-scan"
                    color="#008069"
                    size={32}
                    onPress={() =>
                      this.props.navigation.navigate('LinkDeviceBarCode')
                    }
                  />
                </View>
              </View>
            </TouchableRipple>

            <View style={styles.menuWrapper}>
              <TouchableRipple
                onPress={() =>
                  this.props.navigation.navigate('STNinsideAccount')
                }>
                <View style={styles.menuItem}>
                  <View>
                    <Ionicons name="ios-key" color="gray" size={25} />
                  </View>
                  <View style={styles.menuItemTEXTview}>
                    <Text style={styles.menuItemText}>Accounts</Text>
                    <Text style={{color: 'gray'}}>
                      Privacy,security,change number
                    </Text>
                  </View>
                </View>
              </TouchableRipple>
              <TouchableRipple
                onPress={() => this.props.navigation.navigate('STNinsideChat')}>
                <View style={styles.menuItem}>
                  <MaterialCommunityIcons
                    name="message-text"
                    color="gray"
                    size={25}
                  />
                  <View style={styles.menuItemTEXTview}>
                    <Text style={styles.menuItemText}>Chats</Text>
                    <Text style={{color: 'gray'}}>
                      Theme,wallpaper,chat history
                    </Text>
                  </View>
                </View>
              </TouchableRipple>
              <TouchableRipple
                onPress={() =>
                  this.props.navigation.navigate('STNinsideNotification')
                }>
                <View style={styles.menuItem}>
                  <Ionicons name="notifications" color="gray" size={25} />
                  <View style={styles.menuItemTEXTview}>
                    <Text style={styles.menuItemText}>Notifications</Text>
                    <Text style={{color: 'gray'}}>
                      Message, group & call tones
                    </Text>
                  </View>
                </View>
              </TouchableRipple>
              <TouchableRipple
                onPress={() =>
                  this.props.navigation.navigate('STNinsideStorge')
                }>
                <View style={styles.menuItem}>
                  <MaterialIcons name="data-usage" color="gray" size={25} />
                  <View style={styles.menuItemTEXTview}>
                    <Text style={styles.menuItemText}>Storage and data</Text>
                    <Text style={{color: 'gray'}}>
                      Network usage , auto-download
                    </Text>
                  </View>
                </View>
              </TouchableRipple>
              <TouchableRipple
                onPress={() => this.props.navigation.navigate('STNinsideHelp')}>
                <View style={styles.menuItem}>
                  <Ionicons name="help-circle-outline" color="gray" size={25} />
                  <View style={styles.menuItemTEXTview}>
                    <Text style={styles.menuItemText}>Help</Text>
                    <Text style={{color: 'gray'}}>
                      Help center,contact us,privacy policy
                    </Text>
                  </View>
                </View>
              </TouchableRipple>

              <TouchableRipple onPress={() => alert('Hai James')}>
                <View style={[styles.menuItem]}>
                  <FontAwesome5 name="user-friends" color="gray" size={25} />
                  <View style={styles.menuItemTEXTview}>
                    <Text style={styles.menuItemText}>Invite a friend</Text>
                  </View>
                </View>
              </TouchableRipple>
              <View style={styles.view5}>
                <Text>From</Text>
                <Text
                  style={{
                    fontSize: 18,
                    color: '#000000',
                    letterSpacing: 2,
                    marginTop: 10,
                  }}>
                  FACEBOOK
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
export default SettingScreen;

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
    borderTopWidth: 0.5,
    borderColor: 'gray',
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  menuItemTEXTview: {
    marginLeft: 15,
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
