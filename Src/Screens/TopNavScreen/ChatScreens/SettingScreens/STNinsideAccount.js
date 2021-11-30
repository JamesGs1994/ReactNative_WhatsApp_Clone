import React, {Component} from 'react';
import {View, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Octicons from 'react-native-vector-icons/Octicons';

class STNinsideAccount extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.AllView}>
            <View style={styles.menuWrapper}>
              <TouchableRipple onPress={() => {}}>
                <View style={styles.menuItem}>
                  <View>
                    <Fontisto name="locked" color="gray" size={20} />
                  </View>
                  <View style={styles.menuItemTEXTview}>
                    <Text style={styles.menuItemText}>Privacy</Text>
                  </View>
                </View>
              </TouchableRipple>
              <TouchableRipple onPress={() => {}}>
                <View style={styles.menuItem}>
                  <MaterialIcons name="security" color="gray" size={25} />
                  <View style={styles.menuItemTEXTview}>
                    <Text style={styles.menuItemText}>Security</Text>
                  </View>
                </View>
              </TouchableRipple>
              <TouchableRipple onPress={() => {}}>
                <View style={styles.menuItem}>
                  <Octicons name="ellipsis" color="gray" size={25} />
                  <View style={styles.menuItemTEXTview}>
                    <Text style={styles.menuItemText}>
                      Two-step verification
                    </Text>
                  </View>
                </View>
              </TouchableRipple>
              <TouchableRipple onPress={() => {}}>
                <View style={styles.menuItem}>
                  <MaterialIcons name="send-to-mobile" color="gray" size={25} />
                  <View style={styles.menuItemTEXTview}>
                    <Text style={styles.menuItemText}>Change number</Text>
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
                      Request account info
                    </Text>
                  </View>
                </View>
              </TouchableRipple>
              <TouchableRipple
                onPress={() =>
                  alert(
                    `You can't delete anything because I didn't do any logics here`,
                  )
                }>
                <View style={[styles.menuItem]}>
                  <MaterialCommunityIcons
                    name="delete"
                    color="gray"
                    size={25}
                  />
                  <View style={styles.menuItemTEXTview}>
                    <Text style={styles.menuItemText}>Delete my account</Text>
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
export default STNinsideAccount;

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
  },
  menuItemTEXTview: {
    marginLeft: 25,
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
