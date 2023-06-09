import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import ImageViewer from './assets/images/ImageViewer';
import Button from './assets/images/Button';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

const PlaceholderImage = require('./assets/images/dotes.png');

export default function App({}) {

  const [selectedImage, setSelectedImage] = useState(null);
    const pickImageAsync = async() => {
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        quality: 1,
      });

    if(!result.canceled){
      setSelectedImage(result.assets[0].uri);
      console.log(result);
    } else {
      alert('You did not select any image.');
    }
    };
    return(
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer 
        placeholderImageSource={PlaceholderImage}
         selectedImage={selectedImage}/>
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primay" label="Choose a photo" onPress={pickImageAsync}/>
        <Button label="Use this photo" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  footerContainer:{
    flex:1/3,
    alignItems: 'center',
  }
});
