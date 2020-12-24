import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
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
			 marginBottom: 140,
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
    </View>
	
  );
}
}