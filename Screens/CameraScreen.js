import React, {Component} from 'react';
import {RNCamera as Camera} from 'react-native-camera';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight,
  Dimensions,
} from 'react-native';

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
  capture: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 5,
    borderColor: '#FFF',
    marginBottom: 15,
  },
  cancel: {
    position: 'absolute',
    right: 20,
    top: 20,
    backgroundColor: 'transparent',
    color: '#FFF',
    fontWeight: '600',
    fontSize: 17,
  },
});

export default class TakePictureScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      path: null,
    };
  }

  takePicture = async () => {
    try {
      const data = await this.camera.takePictureAsync();
      this.setState({path: data.uri});
      // this.props.updateImage(data.uri);
      // console.log('Path to image: ' + data.uri);
    } catch (err) {
      console.log('err: ', err);
    }
  };

  renderCamera() {
    return (
      <Camera
        ref={cam => {
          this.camera = cam;
        }}
        style={styles.preview}
        flashMode={Camera.Constants.FlashMode.off}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        androidRecordAudioPermissionOptions={{
          title: 'Permission to use audio recording',
          message: 'We need your permission to use your audio',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        flashMode={Camera.Constants.FlashMode.on}
        type={Camera.Constants.Type.back}>
        <TouchableHighlight
          style={styles.capture}
          onPress={this.takePicture.bind(this)}
          underlayColor="rgba(255, 255, 255, 0.5)">
          <View />
        </TouchableHighlight>
      </Camera>
    );
  }

  renderImage() {
    return (
      <View>
        <Image source={{uri: this.state.path}} style={styles.preview} />
        <Text style={styles.cancel} onPress={() => this.setState({path: null})}>
          Cancel
        </Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.path ? this.renderImage() : this.renderCamera()}
      </View>
    );
  }
}
