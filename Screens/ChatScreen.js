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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class ChatScreen extends Component {
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
  onFloatinActionClick = () => {
    Alert.alert('Floating action button Clicked');
  };
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
              <Text
                style={styles.textView}
                onPress={() => this.props.navigation.navigate('MessagesList')}>
                {item.description}
              </Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={this.onFloatinActionClick}
          style={styles.FloatingActionButtonStyle}>
          <Icon
            name="android-messages"
            size={24}
            color={'#ffffff'}
            onPress={() => {
              Alert.alert('Search Button Clicked');
            }}
          />
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
    width: '80%',
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
  },
  FloatingActionButtonStyle: {
    position: 'absolute',
    width: 55,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 20,
    backgroundColor: '#00a884',
    borderRadius: 200 / 2,
    borderColor: 'gray',
    borderWidth: 0.5,
  },
});
