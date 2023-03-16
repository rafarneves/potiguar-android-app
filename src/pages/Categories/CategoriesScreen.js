import { StyleSheet, Text, View, PermissionsAndroid, Button, Platform, TouchableOpacity } from 'react-native';
import * as Location from 'expo-location';
import { useEffect, useState } from 'react';

export default function CategoriesScreen() {

  // const [location, setLocation] = useState(null);
  // const [errorMsg, setErrorMsg] = useState(null);

  // useEffect(() => {
  //   (async () => {
      
  //     let { status } = await Location.requestForegroundPermissionsAsync();
  //     if (status !== 'granted') {
  //       setErrorMsg('Permission to access location was denied');
  //       return;
  //     }

  //     let location = await Location.getCurrentPositionAsync({});
  //     let address = await Location.reverseGeocodeAsync(location.coords)
  //     console.log(address)
  //     setLocation(address);
  //   })();
  // }, []);

  // let text = 'Waiting..';
  // if (errorMsg) {
  //   text = errorMsg;
  // } else if (location) {
  //   text = JSON.stringify(location[0].subregion);
  // }

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30}}>Tela de categorias</Text>
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    marginTop: 50,
    padding:16,
    backgroundColor:'white',
  },
  boldText: {
    fontSize: 30,
    color: 'red',
  },
  text: {    
    alignItems: 'center',
    justifyContent:'center',
    marginTop: 15,
  },
  button: {
    alignItems: 'center',
    justifyContent:'center',
    marginTop: 15,
  }
});