import React, {Component} from 'react';
import {StyleSheet, View, Alert, Dimensions} from 'react-native';

import {RNCamera as Camera} from 'react-native-camera';
import BarcodeMask from 'react-native-barcode-mask';

export default class ProductScanRNCamera extends Component {
  constructor(props) {
    super(props);
    this.Camera = null;
    this.alertPresent = false;
    this.state = {
      Camera: {
        flashMode: Camera.Constants.FlashMode.auto,
      },
    };
  }

  onBarCodeRead = e => {
    if (!this.alertPresent) {
      this.alertPresent = true;
      Alert.alert(
        'Barcode type is ' + e.type,
        'Barcode value is ' + e.data,
        [{text: 'OK', onPress: () => (this.alertPresent = false)}],
        {cancelable: false},
      );
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={ref => {
            this.Camera = ref;
          }}
          defaultTouchToFocus
          flashMode={this.state.Camera.flashMode}
          mirrorImage={false}
          onBarCodeRead={this.onBarCodeRead.bind(this)}
          style={styles.preview}>
          <BarcodeMask />
        </Camera>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
});
