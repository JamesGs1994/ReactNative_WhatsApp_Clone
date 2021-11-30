import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
  Text,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';

export default class CallsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }
  GetItem(Girl_name) {
    Alert.alert(Girl_name);
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
  webCall = () => {
    return fetch('https://mocki.io/v1/57f6315e-9af0-448b-af1b-4a29c4520735')
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson.GirlImages,
          },
          function () {
            // In this block you can do something with new state.
          },
        );
      })
      .catch(error => {
        console.error(error);
      });
  };
  componentDidMount() {
    this.webCall();
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
    return (
      <View style={styles.MainContainer}>
        <FlatList
          data={this.state.dataSource}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          renderItem={({item}) => (
            <View style={styles.RowView}>
              <Image source={{uri: item.image}} style={styles.imageView} />
              <Text style={styles.textView}> {item.description}</Text>
              <Icon
                name="call"
                size={25}
                color={'green'}
                onPress={() => {
                  Alert.alert('Only 100 Available');
                }}
              />
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={this.onFloatinActionClick}
          style={styles.FloatingActionButtonStyle}
          onPress={() => alert('No Calls')}>
          <MaterialIcons name="add-call" size={21} color={'#ffffff'} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
  },
  imageView: {
    width: 70,
    height: 70,
    margin: 7,
    borderRadius: 100,
  },
  textView: {
    width: '70%',
    textAlignVertical: 'center',
    padding: 10,
    color: '#000',
  },
  RowView: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 1,
    borderBottomWidth: 0.2,
    borderBottomColor: 'gray',
    alignItems: 'center',
  },
  FloatingActionButtonStyle: {
    position: 'absolute',
    width: 55,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 15,
    backgroundColor: '#00a884',
    borderRadius: 200 / 2,
    borderColor: 'gray',
    borderWidth: 0.5,
  },
});
