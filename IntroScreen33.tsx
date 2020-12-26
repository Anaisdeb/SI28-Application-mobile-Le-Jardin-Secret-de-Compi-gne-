import React from "react";
import { View, Text, StyleSheet, ImageBackground, Alert, TouchableOpacity } from "react-native";
import { useFonts, ArimaMadurai_400Regular } from '@expo-google-fonts/arima-madurai';
import AppLoading from 'expo-app-loading';

export default function App({ navigation }) {
	let [fontsLoaded] = useFonts({
		ArimaMadurai_400Regular,
  });
  
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
	return (
		<View style={styles.container}>
			<ImageBackground
					  source={require('./assets/Asset_home_1.png')}
					  style={{width : 380, height : 600, top : 20, Left : 55}}
					> 
				<View
					style={{
						flex: 1,
						justifyContent: "center",
						alignItems: "center"
					}}
					>
					<TouchableOpacity onPress={() => navigation.navigate('34')}>
						<Text style={{	fontFamily: 'ArimaMadurai_400Regular',
							fontSize: 38,
							fontStyle: 'normal',
							fontWeight: '500',
							lineHeight: 58,
							textAlign: 'center',
							color: "#1E5F4B",
							paddingHorizontal: 40,
							paddingVertical: 10,
						}}> 
						Toute l’équipe vous remercie d’avoir testé notre voyage intéractif !
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