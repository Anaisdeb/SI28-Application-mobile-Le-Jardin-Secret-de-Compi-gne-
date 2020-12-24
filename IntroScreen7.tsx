import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useFonts, ArimaMadurai_400Regular, ArimaMadurai_900Black} from '@expo-google-fonts/arima-madurai';
import { Raleway_400Regular } from '@expo-google-fonts/raleway';
import BlurView from "react-native-blur";
import AppLoading from 'expo-app-loading';

export default function App({navigation}) {
  
	let [fontsLoaded] = useFonts({
		ArimaMadurai_400Regular,
		ArimaMadurai_900Black,
		Raleway_400Regular,
  });

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
	  <View style={{
		  flex:1,
		  justifyContent: 'center',
		  aligntItems: 'center',
		  backgroundColor: '#E5E1E1',
	  }}>
		  <View style={{
             flex: 1,
             alignItems: 'center',
			 alignSelf: 'flex-end',
             justifyContent: 'center',
             marginTop: 170,
			 marginBottom: 120,
			 marginLeft : 50,
			 marginRight : 50,
			 backgroundColor: 'white',
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
				M. Bouchardon vient visiter le Jardin Secret des Remparts pour la première fois. Il devait venir avec sa femme mais celle-ci a eu un empêchement et lui a fait promettre de ramener un souvenir de tous les lieux du jardin pouvant lui rappeler Compiègne. 
				{'\n'}{'\n'}Pour aider M. Bouchardon dans sa quête de souvenirs, un ami connaissant le lieu lui a laissé une lettre dans le jardin.
			</Text>
		  
		  <View style={{backgroundColor:'#1E5F4B',
						paddingHorizontal: 50,
						paddingVertical: 10,
						marginHorizontal: 10,
						marginBottom: 10,
						borderRadius: 4,
						shadowradius: 20,
						shadowOpacity: 0.5,

						}}>
			
			<TouchableOpacity onPress={() => navigation.navigate('8')}>
					<Text style={{	fontFamily: 'ArimaMadurai_900Black',
						fontSize: 16,
						fontStyle: 'normal',
						textAlign: 'center',
						color: "white",
					}}> 
					COMMENCER
					</Text>
				</TouchableOpacity>	
		  </View>
		</View>	
        </View>		
    </View>
	
  );
}
}