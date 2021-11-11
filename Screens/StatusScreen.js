import React, {Component} from 'react';

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
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default class StatusScreen extends Component {
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

  webCall = async () => {
    try {
      const response = await fetch(
        'https://mocki.io/v1/57f6315e-9af0-448b-af1b-4a29c4520735',
      );
      const responseJson = await response.json();
      this.setState(
        {
          isLoading: false,
          dataSource: responseJson.GirlImages,
        },
        function () {},
      );
    } catch (error) {
      console.error(error);
    }
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
    const shadowOpt = {
      width: 70,
      height: 70,
      color: '#000',
      border: 2,
      radius: 3,
      opacity: 0.2,
      x: 0,
      y: 3,
      style: {marginVertical: 5},
    };
    return (
      <View style={styles.MainContainer}>
        <TouchableOpacity
          onPress={() => {
            Alert.alert('Update My Status');
          }}>
          <View style={styles.MyStatus}>
            <Image
              source={require('./Images/James.jpg')}
              style={{width: 80, height: 80, borderRadius: 100}}
            />
            <View style={styles.MyStatusTextView}>
              <Text style={styles.MyStatusText}>My Status</Text>
              <Text>Tab to add status update</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.updates}>
          <Text> Recent updates</Text>
        </View>
        <FlatList
          data={this.state.dataSource}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          renderItem={({item}) => (
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Image source={{uri: item.image}} style={styles.imageView} />
              <Text
                onPress={this.GetItem.bind(this, item.description)}
                style={styles.textView}>
                {item.description}
              </Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={this.onFloatinActionClick}
          style={styles.FloatingActionButtonStyleWrite}>
          <Ionicons
            name="ios-pencil-sharp"
            size={20}
            color={'black'}
            elevation={8}
            onPress={() => {
              Alert.alert('pencil Button Clicked');
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={this.onFloatinActionClick}
          style={styles.FloatingActionButtonStyle}
          onPress={() => this.props.navigation.navigate('CameraScreen')}>
          <Icon name="camera" size={21} color={'#ffffff'} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={this.onFloatinActionClick}
          style={styles.FloatingActionAddStyle}
          onPress={() => this.props.navigation.navigate('CameraScreen')}>
          <AntDesign name="plus" size={20} color={'#ffffff'} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    margin: 5,
  },
  MyStatus: {
    flexDirection: 'row',
    margin: 5,
    marginBottom: 15,
    alignItems: 'center',
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
  imageView: {
    width: 70,
    height: 70,
    margin: 7,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: '#6acc75',
  },
  textView: {
    width: '50%',
    textAlignVertical: 'center',
    padding: 10,
    color: '#000',
  },
  MyStatusText: {
    color: '#000',
    marginBottom: 7,
  },
  FloatingActionAddStyle: {
    position: 'absolute',
    width: 26,
    height: 26,
    alignItems: 'center',
    justifyContent: 'center',
    left: 55,
    top: 55,
    backgroundColor: '#00a884',
    borderRadius: 200 / 2,
    borderColor: 'gray',
    borderWidth: 0.5,
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
  FloatingActionButtonStyleWrite: {
    position: 'absolute',
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    right: 25,
    bottom: 80,
    backgroundColor: '#a9a9a9',
    borderRadius: 200 / 2,
    borderColor: 'gray',
    borderWidth: 0.5,
  },
});
