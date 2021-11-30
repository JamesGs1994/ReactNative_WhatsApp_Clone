import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';

class CoutriesINflatlist extends Component {
  state = {
    dataSource: [],
  };
  webCall = async () => {
    try {
      const response = await fetch(
        'https://gist.githubusercontent.com/DmytroLisitsyn/1c31186e5b66f1d6c52da6b5c70b12ad/raw/01b1af9b267471818f4f8367852bd4a2814cbae6/country_dial_info.json',
      );
      const responseJson = await response.json();

      this.setState({
        isLoading: false,
        dataSource: responseJson,
      });
    } catch (error) {
      console.error(error);
    }
  };
  componentDidMount() {
    this.webCall();
  }

  render() {
    return (
      <View style={StyleName.Container}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => (
            <TouchableOpacity style={StyleName.MainView} onPress={() => {}}>
              <View style={StyleName.RowView1}>
                <Text style={StyleName.item1}>{item.flag}</Text>
                {/* {alert(JSON.stringify(item.name))} */}
              </View>
              <View style={StyleName.RowView2}>
                <Text style={StyleName.item2}>{item.name}</Text>
                {/* {alert(JSON.stringify(item.name))} */}
              </View>
              <View style={StyleName.RowView3}>
                <Text style={StyleName.item3}>{item.dial_code}</Text>
                {/* {alert(JSON.stringify(item.name))} */}
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const StyleName = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingLeft: 5,
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

export default CoutriesINflatlist;
