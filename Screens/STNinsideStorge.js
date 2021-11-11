import React, {Component} from 'react';
import {View, SafeAreaView, StyleSheet, ScrollView, Switch} from 'react-native';
import {Text, TouchableRipple} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

class STNinsideStorge extends Component {
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
                <FontAwesome name="folder" color="gray" size={25} />
                <View style={styles.menuItemTEXTview}>
                  <Text style={styles.menuItemText}>Mangae Storge</Text>
                  <Text style={{color: 'gray'}}>2.3 GB</Text>
                </View>
              </View>
            </TouchableRipple>
            <TouchableRipple
              onPress={() => this.props.navigation.navigate('STNinsideStorge')}>
              <View style={styles.menuItem}>
                <MaterialIcons name="data-usage" color="gray" size={25} />
                <View style={styles.menuItemTEXTview}>
                  <Text style={styles.menuItemText}>Network Usage</Text>
                  <Text style={{color: 'gray'}}>
                    1.4 GB sent . 2.7 GB received
                  </Text>
                </View>
              </View>
            </TouchableRipple>
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
                    value={this.state.switchValue}
                    onValueChange={switchValue => this.setState({switchValue})}
                  />
                </View>
              </View>
            </TouchableRipple>
            <View style={{marginLeft: 25}}>
              <Text style={{color: 'gray'}}>Media auto-download</Text>
              <Text style={{color: 'gray'}}>
                Voice messages are always automatically downloaded
              </Text>
            </View>
            <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                <View style={styles.menuItemTEXTview}>
                  <Text style={styles.menuItemText}>
                    When using mobile data
                  </Text>
                  <Text style={{color: 'gray'}}>No media</Text>
                </View>
              </View>
            </TouchableRipple>
            <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                <View style={styles.menuItemTEXTview}>
                  <Text style={styles.menuItemText}>
                    When connected on Wi-Fi
                  </Text>
                  <Text style={{color: 'gray'}}>No media</Text>
                </View>
              </View>
            </TouchableRipple>
            <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                <View style={styles.menuItemTEXTview}>
                  <Text style={styles.menuItemText}>When roaming</Text>
                  <Text style={{color: 'gray'}}>No media</Text>
                </View>
              </View>
            </TouchableRipple>
            <View style={{marginLeft: 25}}>
              <Text style={{color: 'gray'}}>Media upload quality</Text>
              <Text style={{color: 'gray'}}>
                Choose the quality of media files to be sent
              </Text>
            </View>
            <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                <View style={styles.menuItemTEXTview}>
                  <Text style={styles.menuItemText}>Photo upload quality</Text>
                  <Text style={{color: 'gray'}}>Auto (recommended)</Text>
                </View>
              </View>
            </TouchableRipple>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
export default STNinsideStorge;

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
