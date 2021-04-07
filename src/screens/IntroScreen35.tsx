import React from "react";
import { View, Text, StyleSheet, ImageBackground, Alert, TouchableOpacity } from "react-native";
import { useFonts, ArimaMadurai_400Regular, ArimaMadurai_700Bold } from '@expo-google-fonts/arima-madurai';
import AppLoading from 'expo-app-loading';

export default function App({ navigation }) {
	let [fontsLoaded] = useFonts({
		ArimaMadurai_400Regular,
		ArimaMadurai_700Bold,
  });
  
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
	return (
		<View style={styles.container}>
			<ImageBackground
					  source={require('./assets/Photofin_eleonore.png')}
					  style={{height: "100%"}}
					> 
				<View
					style={{
						flex: 1,
						justifyContent: "flex-start",
					}}
					>
					<TouchableOpacity onPress={() => navigation.navigate('36')}>
						<Text style={{	
							fontSize: 38,
							fontStyle: 'normal',
							fontWeight: '500',
							lineHeight: 50,
							textAlign: 'center',
							color: "#1E5F4B",
							paddingVertical: 69,
							paddingRight: 160,
						}}> 
						<Text style={{ fontFamily: 'ArimaMadurai_700Bold'}}> Eléonore SAS </Text>
						<Text style={{ fontFamily: 'ArimaMadurai_400Regular'}}> {'\n'}UxD </Text>
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