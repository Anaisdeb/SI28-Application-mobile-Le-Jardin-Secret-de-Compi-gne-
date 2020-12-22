import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useFonts, ArimaMadurai_400Regular, ArimaMadurai_800ExtraBold} from '@expo-google-fonts/arima-madurai';
//import { useFonts, Raleway_400Regular } from '@expo-google-fonts/raleway';
import Icon from 'react-native-vector-icons/Ionicons';
import AppLoading from 'expo-app-loading';

export default function App({navigation}) {
  
	let [fontsLoaded] = useFonts({
		ArimaMadurai_400Regular,
		ArimaMadurai_800ExtraBold,
  });

  const styles = StyleSheet.create({
  logo: {
    width : 220,
	height : 220,
	top : 40,
	left : 55,
  },
});
  
   if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  return (
    <View style={{ flex: 1 }}>
        <View
          style={{
            backgroundColor: 'white',
            flexDirection: 'row',
			height: '40%',
          }}>
		  <Image
			style={styles.logo}
			source={require('./assets/Asset_onboarding_1.png')}
		  />
        </View>
      
	  
	  <View style={{
		  flex:1,
		  justifyContent: 'center',
		  aligntItems: 'center',
		  backgroundColor: 'white'
	  }}>
		  <View style={{
             flex: 1,
             alignItems: 'center',
			 alignSelf: 'flex-end',
             justifyContent: 'center',
             marginTop: 20,
           }}>
		   <View style={{ flexDirection: 'row'
		   
		   }}>
           <Icon name="ios-radio-button-on" size={20} color = {'#1E5F4B'}/><Icon name="ios-radio-button-off" size={20} color = {'#F1E3BF'}/><Icon name="ios-radio-button-off" size={20}color = {'#F1E3BF'}/>
		   </View>
		   <Text style={{ fontSize: 18, marginBottom: 40, marginTop: 20, color: '#1E5F4B',  textAlign: 'center', marginHorizontal: 50, fontFamily: 'ArimaMadurai_800ExtraBold' }}> DÉCOUVRE UN LIEU MAGIQUE </Text>
		   <Text style={{ fontSize: 16, marginBottom: 20, color: 'black',  textAlign: 'center', marginHorizontal: 50, fontFamily: 'ArimaMadurai_400Regular' }}> Grâce à cette application, tu vas découvrir un des lieux magiques de Compiègne : le <Text style={{ fontWeight: "bold",}}>Jardin Secret des Remparts </Text> </Text>
          </View>
		  
		  <View style={{backgroundColor:'#1E5F4B',
						padding: 20,
						marginHorizontal: 50,
						marginBottom: 20,
						borderRadius: 9,
						shadowradius: 20,
						shadowOpacity: 0.5,

						}}>
			
			<TouchableOpacity onPress={() => navigation.navigate('4')}>
					<Text style={{	fontFamily: 'ArimaMadurai_400Regular',
						fontSize: 18,
						fontStyle: 'normal',
						textAlign: 'center',
						color: "white",
					}}> 
					CONTINUER
					</Text>
				</TouchableOpacity>	
		  </View>
		</View>	  
    </View>
	
  );
  }
}