import React from "react";
import { View, Text, StyleSheet, ImageBackground, Alert, TouchableOpacity } from "react-native";
import { useFonts, ArimaMadurai_400Regular } from '@expo-google-fonts/arima-madurai';


export default function App({ navigation }) {
	let [fontsLoaded] = useFonts({
		ArimaMadurai_400Regular,
  });
  
  	setTimeout(() => {
		navigation.navigate('2'); //this.props.navigation.navigate('Login')
	}, 1000);  //5000 milliseconds
  
  return (
  
    <View style={styles.container}>
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
					
            </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E5F4B",
    alignItems: "center",
    justifyContent: "center",
  },
});