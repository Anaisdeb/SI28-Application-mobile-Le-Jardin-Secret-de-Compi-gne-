import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Button, Alert } from 'react-native';
import { Camera } from 'expo-camera';
import * as Location from 'expo-location';
import Icon from 'react-native-vector-icons/Ionicons';

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
  

  _onPressContinuer=()=> {
			  Alert.alert("Continuons !");
		  }
  

  
  return (
    <View style={{ flex: 2 }}>
      <Camera style={{ flex: 1 }} type={type}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
          }}>

          <TouchableOpacity //En appuyant dessus, l'opacité de la vue enveloppée est réduite, ce qui l'assombrit.
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
	  
	  <View style={{
		  flex:1,
		  justifyContent: 'center',
		  aligntItems: 'center'
	  }}>
		  <View style={{
             flex: 1,
             alignItems: 'center',
			 alignSelf: 'flex-end',
             justifyContent: 'center',
             marginTop: 0,
           }}>
		   <View style={{ flexDirection: 'row'
		   
		   }}>
           <Icon name="ios-radio-button-on" size={20}/><Icon name="ios-radio-button-off" size={20}/><Icon name="ios-radio-button-off" size={20}/>
		   </View>
		   <Text style={{ fontSize: 18, marginBottom: 40, marginTop: 20, color: 'black',  textAlign: 'center', marginHorizontal: 50, fontWeight: "bold" }}> DÉCOUVRE UN LIEU MAGIQUE </Text>
		   <Text style={{ fontSize: 16, marginBottom: 20, color: 'black',  textAlign: 'center', marginHorizontal: 50, }}> Grâce à cette application, tu vas découvrir un des lieux magiques de Compiègne : le <Text style={{ fontWeight: "bold",}}>Jardin Secret des Remparts </Text> </Text>
          </View>
		  
		  <View style={{backgroundColor:'black',
						padding: 20,
						marginHorizontal: 50,
						marginBottom: 20,
						borderRadius: 9,
						shadowradius: 20,
						shadowOpacity: 0.5,

						}}>
						
			  <Button onPress={this._onPressContinuer}
			  title="Continuer"
			  color='black'
			  >
			  </Button>
			
		  </View>
	  </View>	  
    </View>
  );
}