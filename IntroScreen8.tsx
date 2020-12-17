import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';
import * as Location from 'expo-location';
import { useFonts, Raleway_400Regular } from '@expo-google-fonts/raleway';

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
					paddingHorizontal: 10,
					color: 'white',
					textAlign: 'center',
					fontFamily: 'Raleway_400Regular' }}>
					Trouve la boîte aux lettres et vise-la avec ton téléphone
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
					<TouchableOpacity onPress={() => navigation.navigate('9')}>
						<Text style={{	fontFamily: 'ArimaMadurai_400Regular',
							fontSize: 18,
							fontStyle: 'normal',
							textAlign: 'center',
							color: "#1E5F4B",
						}}> 
						J’AI TROUVÉ !
						</Text>
					</TouchableOpacity>	
				</View>
			</View>
		</Camera>
    </View>
  );
}