import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function App({navigation}) {
  
	const styles = StyleSheet.create({
    logo: {
        width : 220,
        height : 220,
        top : 40,
        left : 55,
	},
	});

  return (
    <View style={{ flex: 1 }}>
        <View
          style={{
            backgroundColor: 'white',
            flexDirection: 'column',
			justifyContent: 'center',
			height: '50%',
          }}>
		  <Image
			style={styles.logo}
			source={require('../../assets/Asset_onboarding_1.png')}
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
		   <Text style={{ fontSize: 18, marginBottom: 40, marginTop: 20, color: '#1E5F4B',  textAlign: 'center', marginHorizontal: 50, fontFamily: 'ArimaMadurai_900Black' }}> DÉCOUVRE UN LIEU MAGIQUE </Text>
		   <Text style={{ fontSize: 16, marginBottom: 20, color: 'black',  textAlign: 'center', marginHorizontal: 50, fontFamily: 'Raleway_400Regular' }}> Grâce à cette application, tu vas découvrir un des lieux magiques de Compiègne : le <Text style={{ fontWeight: "bold",}}>Jardin Secret des Remparts </Text> </Text>
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
					<Text style={{	fontFamily: 'ArimaMadurai_900Black',
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