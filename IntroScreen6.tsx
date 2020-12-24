import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useFonts, ArimaMadurai_400Regular, ArimaMadurai_900Black} from '@expo-google-fonts/arima-madurai';
import { Raleway_400Regular } from '@expo-google-fonts/raleway';
import AppLoading from 'expo-app-loading';

export default function App({navigation}) {
  
	let [fontsLoaded] = useFonts({
		ArimaMadurai_400Regular,
		ArimaMadurai_900Black,
		Raleway_400Regular,
  });

  const styles = StyleSheet.create({
  logo1: {
    width : 125,
	height : 115,
	top : 10,
	left : 110,
  },
  logo2: {
    width : 105,
	height : 125,
	top : 0,
	left : 130
  },
});
  
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  return (
	<View style={{
		  flex:1,
		  justifyContent: 'center',
		  aligntItems: 'center',
		  backgroundColor: 'white'
	  }}>
		<View
			style={{
			backgroundColor: 'white',
			}}>
			<Text style={{ fontSize: 18, marginBottom: 40, marginTop: 80, color: '#1E5F4B',  textAlign: 'center', marginHorizontal: 50, fontFamily: 'ArimaMadurai_900Black' }}> DERNIERS AJUSTEMENTS AVANT DE COMMENCER </Text>
			<View
			  style={{
				backgroundColor: 'white',
				flexDirection: 'row',
				height: '30%',
			  }}>
			  <Image
				style={styles.logo1}
				source={require('./assets/Asset_onboarding_4a.png')}
			/>
			</View>
			<View style={{
				 flex: 1,
				 alignItems: 'center',
				 alignSelf: 'flex-end',
				 justifyContent: 'center',
				 marginTop: 20,
			   }}>
				<Text style={{ fontSize: 16, marginBottom: 50, color: 'black',  textAlign: 'center', marginHorizontal: 100, fontFamily: 'Raleway_400Regular' }}> Mets tes écouteurs</Text>
			</View>
	</View>
      
	  
	<View style={{
	  flex:1,
	  justifyContent: 'center',
	  aligntItems: 'center',
	  backgroundColor: 'white'
	}}>
	<View
		style={{
		backgroundColor: 'white',
		flexDirection: 'row',
		height: '30%',
		}}>
		<Image
		style={styles.logo2}
		source={require('./assets/Asset_onboarding_4b.png')}
		/>
	</View>
	<View style={{
	 flex: 1,
	 alignItems: 'center',
	 alignSelf: 'flex-end',
	 justifyContent: 'center',
	 marginTop: 20,
	}}>
	<Text style={{ fontSize: 16, marginBottom: 20, color: 'black',  textAlign: 'center', marginHorizontal: 60, fontFamily: 'Raleway_400Regular' }}> Tiens ton téléphone verticalement</Text>
	</View>
	<View style={{backgroundColor:'#1E5F4B',
				padding: 20,
				marginHorizontal: 50,
				marginBottom: 20,
				borderRadius: 9,
				shadowradius: 20,
				shadowOpacity: 0.5,
	}}>
	<TouchableOpacity onPress={() => navigation.navigate('7')}>
		<Text style={{	fontFamily: 'ArimaMadurai_900Black',
			fontSize: 18,
			fontStyle: 'normal',
			textAlign: 'center',
			color: "white",
		}}> 
		C’EST PARTI !
		</Text>
	</TouchableOpacity>	
	</View>
	</View>	  
	</View>

  );
}
}