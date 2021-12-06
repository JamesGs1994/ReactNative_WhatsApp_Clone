import React, {Component} from 'react';

import {
  ActivityIndicator,
  Alert,
  FlatList,
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class CoutriesINflatlist extends Component {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
    this.state = {
      isLoading: true,
      text: '',
      data: [],
    };

    this.arrayholder = [];
  }

  async componentDidMount() {
    try {
      const response = await fetch(
        'https://gist.githubusercontent.com/DmytroLisitsyn/1c31186e5b66f1d6c52da6b5c70b12ad/raw/01b1af9b267471818f4f8367852bd4a2814cbae6/country_dial_info.json',
      );
      const responseJson = await response.json();
      this.setState(
        {
          isLoading: false,
          data: responseJson,
        },
        () => {
          this.arrayholder = responseJson;
        },
      );
    } catch (error) {
      console.error(error);
    }
  }
  searchData(text) {
    const newData = this.arrayholder.filter(item => {
      const itemData = item.name.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });

    this.setState({
      data: newData,
      text: text,
    });
  }

  itemSeparator = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: '100%',
        }}
      />
    );
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={styles.MainContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={text => this.searchData(text)}
          value={this.state.text}
          underlineColorAndroid="transparent"
          placeholder="Search Your Country"
        />

        <FlatList
          data={this.state.data}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.MainView}
              onPress={() =>
                this.navigation.navigate('PhoneNumberVerify', {
                  TransferData: item,
                })
              }>
              <View style={styles.RowView1}>
                <Text style={styles.item1}>{item.flag}</Text>
              </View>
              <View style={styles.RowView2}>
                <Text style={styles.item2}>{item.name}</Text>
              </View>
              <View style={styles.RowView3}>
                <Text style={styles.item3}>{item.dial_code}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
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

  row: {
    fontSize: 18,
    padding: 12,
  },

  textInput: {
    textAlign: 'center',
    height: 42,
    borderWidth: 1,
    borderColor: '#009688',
    borderRadius: 8,
    backgroundColor: '#FFFF',
  },
  MainView: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    maxWidth: '95%',
  },
  RowView1: {
    width: '10%',
  },
  RowView2: {
    width: '70%',
    marginRight: 20,
  },
  RowView3: {
    width: '20%',
    alignItems: 'flex-end',
  },
  item1: {
    fontSize: 20,
    color: 'black',
  },
  item2: {
    fontSize: 20,
    color: 'black',
  },
  item3: {
    fontSize: 20,
    color: 'grey',
  },
});
