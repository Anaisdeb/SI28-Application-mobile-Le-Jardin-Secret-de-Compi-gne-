import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useFonts, ArimaMadurai_400Regular, ArimaMadurai_800ExtraBold} from '@expo-google-fonts/arima-madurai';
//import { useFonts, Raleway_400Regular } from '@expo-google-fonts/raleway';
import BlurView from "react-native-blur";

export default function App({navigation}) {
  
	let [fontsLoaded] = useFonts({
		ArimaMadurai_400Regular,
		ArimaMadurai_800ExtraBold,
  });

  const styles = StyleSheet.create({
  logo: {
    width : 190,
	height : 230,
	top : 33,
	left : 80,
  },
});
  
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
             marginTop: 80,
			 marginBottom: 80,
			 marginLeft : 20,
			 marginRight : 20,
			 backgroundColor: 'white',
           }}>
			<Text style={{ 
				fontSize: 16,
				marginBottom: 30,
				marginTop: 20,
				color: 'black', 
				textAlign: 'auto',
				marginHorizontal: 50,
				fontFamily: 'ArimaMadurai_400Regular' }}>
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
					<Text style={{	fontFamily: 'ArimaMadurai_400Regular',
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