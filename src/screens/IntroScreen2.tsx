import React from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import styles, {assets} from '../../styles';

export default function App({ navigation }) {

	return (
		<View style={styles.container}>
			<ImageBackground
					  source={assets.home}
					  style={{width : 265, height : 390, top : 20, left : 0}}
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