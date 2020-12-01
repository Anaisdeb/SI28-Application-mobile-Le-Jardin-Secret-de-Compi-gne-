import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';
import * as Location from 'expo-location';

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null); //crée une fonction setErrorMsg qui prend la variable errorMsg

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');

      let { statusLoc } = await Location.requestPermissionsAsync();
      if (statusLoc !== 'granted') {
        setErrorMsg('Pas de permission pour la géolocalisation');
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  let text = 'En attente de la localisation..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type}>
      <View style={{
             flex: 1,
             alignItems: 'center',
             justifyContent: 'center',
             marginTop: 0,
           }}>
           <Text style={{ fontSize: 30, marginBottom: 20, color: 'white',  textAlign: 'center' }}> Découvre un lieu magique </Text>
		   <Text style={{ fontSize: 18, marginBottom: 20, color: 'white',  textAlign: 'center' }}> Grâce à cette application, tu vas découvrir un des lieux magiques de Compiègne : le Jardin Secret des Remparts </Text>
		   
           <Text style={{ fontSize: 18, marginBottom: 20, color: 'white' }}> {text} </Text>
       </View>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
          }}>

          <TouchableOpacity
            style={{
              flex: 0.5,
              alignSelf: 'flex-end',
              alignItems: 'center',
            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={{ fontSize: 18, marginBottom: 20, color: 'white' }}> Changer de camera </Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}