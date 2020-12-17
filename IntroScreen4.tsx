import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useFonts, ArimaMadurai_400Regular, ArimaMadurai_800ExtraBold} from '@expo-google-fonts/arima-madurai';
//import { useFonts, Raleway_400Regular } from '@expo-google-fonts/raleway';
import Icon from 'react-native-vector-icons/Ionicons';

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
        <View
          style={{
            backgroundColor: 'white',
            flexDirection: 'row',
			height: '40%',
          }}>
		  <Image
			style={styles.logo}
			source={require('./assets/Asset_onboarding_2.png')}
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
           <Icon name="ios-radio-button-off" size={20} color = {'#F1E3BF'}/><Icon name="ios-radio-button-on" size={20} color = {'#1E5F4B'}/><Icon name="ios-radio-button-off" size={20}color = {'#F1E3BF'}/>
		   </View>
		   <Text style={{ fontSize: 18, marginBottom: 40, marginTop: 20, color: '#1E5F4B',  textAlign: 'center', marginHorizontal: 50, fontFamily: 'ArimaMadurai_800ExtraBold' }}> PROFITE DE TOUS LES EFFETS </Text>
		   <Text style={{ fontSize: 16, marginBottom: 20, color: 'black',  textAlign: 'center', marginHorizontal: 50, fontFamily: 'ArimaMadurai_400Regular' }}> Pour profiter de cette expérience interactive, munis toi de <Text style={{ fontWeight: "bold",}}>ton téléphone, de tes écouteurs</Text> et surtout… de ton troisième oeil.</Text>
          </View>
		  
		  <View style={{backgroundColor:'#1E5F4B',
						padding: 20,
						marginHorizontal: 50,
						marginBottom: 20,
						borderRadius: 9,
						shadowradius: 20,
						shadowOpacity: 0.5,

						}}>
			
			<TouchableOpacity onPress={() => navigation.navigate('5')}>
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