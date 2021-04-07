import React from "react";
import { View, Text, StyleSheet, ImageBackground, Alert, TouchableOpacity } from "react-native";
import { useFonts, ArimaMadurai_400Regular, ArimaMadurai_900Black } from '@expo-google-fonts/arima-madurai';
import AppLoading from 'expo-app-loading';

export default function App({ navigation }) {
	let [fontsLoaded] = useFonts({
		ArimaMadurai_400Regular,
		ArimaMadurai_900Black,
  });
  
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
	return (
		<View style={styles.container}>
			<ImageBackground
					  source={require('./assets/Asset_home_1.png')}
					  style={{width : 235, height : 350, bottom : 120, Left : 55}}
					>				
					<Text style={{	fontFamily: 'ArimaMadurai_400Regular',
						fontSize: 32,
						fontStyle: 'normal',
						fontWeight: '500',
						lineHeight: 58,
						textAlign: 'center',
						color: "#1E5F4B",
						marginHorizontal: 45,
						//paddingVertical: 65,
					}}> 
					Merci et à une prochaine fois !
					</Text>
					<View style={{backgroundColor:'#1E5F4B',
						paddingHorizontal: 50,
						paddingVertical: 10,
						marginHorizontal: 0,
						marginBottom: 10,
						borderRadius: 4,
						shadowradius: 20,
						shadowOpacity: 0.5,
						borderColor: '#F1E3BF',
						borderWidth: 1,

						}}>
			
					<TouchableOpacity onPress={() => navigation.navigate('2')}>
							<Text style={{	fontFamily: 'ArimaMadurai_900Black',
								fontSize: 16,
								fontStyle: 'normal',
								textAlign: 'center',
								color: "#F1E3BF",
							}}> 
							RECOMMENCER
							</Text>
						</TouchableOpacity>	
					  </View>
					  <View style={{backgroundColor:'#F1E3BF',
						paddingHorizontal: 50,
						paddingVertical: 10,
						marginHorizontal: 0,
						marginBottom: 10,
						borderRadius: 4,
						shadowradius: 20,
						shadowOpacity: 0.5,

						}}>
			
					<TouchableOpacity onPress={() => navigation.navigate('2')}>
							<Text style={{	fontFamily: 'ArimaMadurai_900Black',
								fontSize: 16,
								fontStyle: 'normal',
								textAlign: 'center',
								color: "#1E5F4B",
							}}> 
							FERMER
							</Text>
						</TouchableOpacity>	
					  </View>
			</ImageBackground>
		</View>
	  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E5F4B",
    alignItems: "center",
    justifyContent: "center",
  },
});