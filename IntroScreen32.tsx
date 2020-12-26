import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import { Camera } from 'expo-camera';
import * as Location from 'expo-location';
import { useFonts, Raleway_400Regular } from '@expo-google-fonts/raleway';
import AppLoading from 'expo-app-loading';

export default function App({navigation}) {
	
	let [fontsLoaded] = useFonts({
		Raleway_400Regular
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
	height : 180,
	top : 30,
	left :0,
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
             marginTop: 250,
			 marginBottom: 250,
			 marginLeft : 40,
			 marginRight : 40,
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
				marginHorizontal: 20,
				backgroundColor: 'white',
				fontFamily: 'Raleway_400Regular' }}>
				Bravo ! Merci de m’avoir aidé à récolter tous ces souvenirs ! Ma femme sera ravie ! A bientôt, peut-être... !
			</Text>
		  
		  <View style={{backgroundColor:'#1E5F4B',
						paddingHorizontal: 40,
						paddingVertical: 10,
						marginHorizontal: 10,
						marginBottom: 10,
						borderRadius: 4,
						shadowradius: 20,
						shadowOpacity: 0.5,

						}}>
			
			<TouchableOpacity onPress={() => navigation.navigate('33')}>
					<Text style={{	fontFamily: 'ArimaMadurai_900Black',
						fontSize: 16,
						fontStyle: 'normal',
						textAlign: 'center',
						color: "white",
					}}> 
					FINIR L’EXPLORATION
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