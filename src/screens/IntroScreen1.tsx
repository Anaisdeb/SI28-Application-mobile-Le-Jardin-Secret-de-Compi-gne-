import React from "react";
import {View} from "react-native";
import styles from '../../styles';

export default function App({ navigation }) {
	
	setTimeout(() => {
		navigation.navigate('2');
	}, 1000);  //1 second 
	
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
	
