import React from "react";
import { View, Text, StyleSheet, ImageBackground, Alert, TouchableOpacity } from "react-native";
import AppLoading from 'expo-app-loading';
import { useFonts, ArimaMadurai_400Regular } from '@expo-google-fonts/arima-madurai';


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
					  style={{width : 265, height : 390, top : 20, Left : 55}}
					> 
				<View
					style={{
						flex: 1,
						justifyContent: "center",
						alignItems: "center"
					}}
					>
					<TouchableOpacity onPress={() => navigation.navigate('3')}>
						<Text style={{	fontFamily: 'ArimaMadurai_400Regular',
							fontSize: 38,
							fontStyle: 'normal',
							fontWeight: '500',
							lineHeight: 58,
							textAlign: 'center',
							color: "#1E5F4B",
						}}> 
						Le Jardin {"\n"}Secret de {"\n"}Compiègne 
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