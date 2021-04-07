import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Camera } from 'expo-camera';
import * as Location from 'expo-location';
import { useFonts, ArimaMadurai_400Regular, ArimaMadurai_900Black} from '@expo-google-fonts/arima-madurai';
import { CormorantUpright_400Regular } from '@expo-google-fonts/cormorant-upright';
import AppLoading from 'expo-app-loading';
import BlurView from "react-native-blur";

export default function App({navigation}) {
  
	let [fontsLoaded] = useFonts({
		ArimaMadurai_400Regular,
		ArimaMadurai_900Black,
		CormorantUpright_400Regular,
  });

 const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');

      let { statusLoc } = await Location.requestPermissionsAsync();
      if (statusLoc !== 'granted') {
        setErrorMsg(' ');
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

  const styles = StyleSheet.create({
  logo: {
    width : 190,
	height : 230,
	top : 33,
	left : 80,
  },
});
  
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  return (
    <View style={{ flex: 1 }}>
	<Camera style={{ flex: 1 }} type={type}>
	  <View style={{
		  flex:1,
		  justifyContent: 'center',
		  aligntItems: 'center',
	  }}>
		  <View style={{
             flex: 1,
             alignItems: 'center',
			 alignSelf: 'flex-end',
             justifyContent: 'center',
             marginTop: 170,
			 marginBottom: 140,
			 marginLeft : 50,
			 marginRight : 50,
			 backgroundColor: 'white',
			 borderRadius: 4,
			 shadowradius: 20,
           }}>
			<Text style={{ 
				fontSize: 16,
				marginBottom: 30,
				marginTop: 20,
				color: 'black', 
				textAlign: 'auto',
				marginHorizontal: 50,
				fontFamily: 'CormorantUpright_400Regular' }}>
				
				Cher M. Bouchardon, {'\n'}{'\n'}
				Comme tu vas très vite le découvrir, ce jardin regorge de mystères du passé Compiègnois.  {'\n'}{'\n'}
				Il parait que des personnalités historiques de Compiègne se promènent encore dans le parc... La dernière fois que je les ai vues, ils étaient dans le labyrinthe près des remparts...
			</Text>
		  
		  <View style={{backgroundColor:'#1E5F4B',
						paddingHorizontal: 50,
						paddingVertical: 8,
						marginHorizontal: 0,
						marginBottom: 0,
						borderRadius: 4,
						shadowradius: 10,
						shadowOpacity: 0.5,

						}}>
			
			<TouchableOpacity onPress={() => navigation.navigate('13')}>
					<Text style={{	fontFamily: 'ArimaMadurai_900Black',
						fontSize: 16,
						fontStyle: 'normal',
						textAlign: 'center',
						color: "white",
					}}> 
					FERMER
					</Text>
				</TouchableOpacity>	
		  </View>
		</View>	
        </View>	
	</Camera>		
    </View>
	
  );
}
}