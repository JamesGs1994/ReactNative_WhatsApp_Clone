import React, {Component} from 'react';
import {View, SafeAreaView, StyleSheet, ScrollView, Switch} from 'react-native';
import {Text, TouchableRipple} from 'react-native-paper';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

class STNinsideHelp extends Component {
  state = {
    switchValue: true,
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.AllView}>
            <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                <Ionicons name="help-circle-outline" color="gray" size={25} />
                <View style={styles.menuItemTEXTview}>
                  <Text style={styles.menuItemText}>Help Center</Text>
                </View>
              </View>
            </TouchableRipple>
            <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                <FontAwesome5 name="user-friends" color="gray" size={25} />
                <View style={styles.menuItemTEXTview}>
                  <Text style={styles.menuItemText}>Contact us</Text>
                  <Text style={{color: 'gray'}}>Questions ? Need help ?</Text>
                </View>
              </View>
            </TouchableRipple>
            <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                <MaterialCommunityIcons
                  name="file-document"
                  color="gray"
                  size={25}
                />
                <View style={styles.menuItemTEXTview}>
                  <Text style={styles.menuItemText}>
                    Terms and Privacy Policy
                  </Text>
                </View>
              </View>
            </TouchableRipple>
            <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                <SimpleLineIcons name="info" color="gray" size={25} />
                <View style={styles.menuItemTEXTview}>
                  <Text style={styles.menuItemText}>App info</Text>
                </View>
              </View>
            </TouchableRipple>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
export default STNinsideHelp;

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
    alignItems: 'center',
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
