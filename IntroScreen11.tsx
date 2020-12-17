import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image} from 'react-native';
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
	
  const styles = StyleSheet.create({
  logo: {
    width : 190,
	height : 180,
	top : 30,
	left :0,
  },
});
  
  return (
    <View style={{ flex: 1 }}>
		<Camera style={{ flex: 1 }} type={type}>
			<View style={{
				 flex: 1,
				 justifyContent: 'center',
				 marginTop: 20,
			   }}>
				<Text style={{ 
					fontSize: 30,
					marginBottom: 10,
					marginHorizontal: 10,
					color: 'white',
					textAlign: 'center',
					fontFamily: 'Raleway_400Regular' }}>
					la lettre :
				</Text>
				<View
					  style={{
						backgroundColor: 'transparent',
						flexDirection: 'row',
						height: '40%',
						justifyContent: 'center',
					  }}>
					  <Image
						style={styles.logo}
						source={require('./assets/Asset_boiteauxlettres_lettre.png')}
					  />
					</View>
				<View style={{backgroundColor:'white',
						paddingHorizontal: 50,
						paddingVertical: 10,
						marginHorizontal: 50,
						marginBottom: 10,
						borderRadius: 4,
						shadowradius: 20,
						shadowOpacity: 0.5,
				}}>
					<TouchableOpacity onPress={() => navigation.navigate('12')}>
						<Text style={{	fontFamily: 'ArimaMadurai_400Regular',
							fontSize: 18,
							fontStyle: 'normal',
							textAlign: 'center',
							color: "#1E5F4B",
						}}> 
						LIRE
						</Text>
					</TouchableOpacity>	
				</View>
			</View>
		</Camera>
    </View>
  );
}