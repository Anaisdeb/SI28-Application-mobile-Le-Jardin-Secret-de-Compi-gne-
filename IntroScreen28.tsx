import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { Camera } from 'expo-camera';
import * as Location from 'expo-location';
import { useFonts, ArimaMadurai_400Regular, ArimaMadurai_900Black} from '@expo-google-fonts/arima-madurai';
import { Raleway_400Regular, Raleway_700Bold, } from '@expo-google-fonts/raleway';
import AppLoading from 'expo-app-loading';

export default function App({navigation}) {
	
	let [fontsLoaded] = useFonts({
		ArimaMadurai_900Black,
		Raleway_400Regular,
		Raleway_700Bold,
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

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  return (
    <View style={{ flex: 1 }}>
		<Camera style={{ flex: 1 }} type={type}>
			<View style={{
				 flex: 1,
				 alignItems: 'center',
				 justifyContent: 'center',
				 marginTop: 20,
			   }}>
				<Text style={{ 
					fontSize: 30,
					marginBottom: 50,
					paddingHorizontal: 50,
					color: 'white',
					textAlign: 'center',
					textShadowColor:'#1E5F4B',
					textShadowOffset:{width: 1, height: 1},
					textShadowRadius:1,
					fontFamily: 'Raleway_700Bold' }}>
					Rends toi au puits pour trouver la bague perdue...
				</Text>
				<View style={{backgroundColor:'white',
						paddingHorizontal: 50,
						paddingVertical: 10,
						marginHorizontal: 10,
						marginBottom: 10,
						borderRadius: 4,
						shadowradius: 20,
						shadowOpacity: 0.5,
				}}>
					<TouchableOpacity onPress={() => navigation.navigate('29')}>
						<Text style={{	fontFamily: 'ArimaMadurai_900Black',
							fontSize: 18,
							fontStyle: 'normal',
							textAlign: 'center',
							color: "#1E5F4B",
						}}> 
						J’Y SUIS !
						</Text>
					</TouchableOpacity>	
				</View>
			</View>
		</Camera>
    </View>
  );
}
}