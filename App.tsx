import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { Camera } from 'expo-camera';
import * as Location from 'expo-location';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import IntroScreen1 from './IntroScreen1';
import IntroScreen2 from './IntroScreen2';
import IntroScreen3 from './IntroScreen3';
import IntroScreen4 from './IntroScreen4';
import IntroScreen5 from './IntroScreen5';
import IntroScreen6 from './IntroScreen6';
import IntroScreen7 from './IntroScreen7';
import IntroScreen8 from './IntroScreen8';
import IntroScreen9 from './IntroScreen9';
import IntroScreen10 from './IntroScreen10';
import IntroScreen11 from './IntroScreen11';
import IntroScreen12 from './IntroScreen12';
import IntroScreen13 from './IntroScreen13';
import IntroScreen14 from './IntroScreen14';
import IntroScreen15 from './IntroScreen15';
import IntroScreen16 from './IntroScreen16';
import IntroScreen17 from './IntroScreen17';
import IntroScreen18 from './IntroScreen18';
import IntroScreen19 from './IntroScreen19';
import IntroScreen20 from './IntroScreen20';
import IntroScreen21 from './IntroScreen21';
import IntroScreen22 from './IntroScreen22';
import IntroScreen23 from './IntroScreen23';
import IntroScreen24 from './IntroScreen24';
import IntroScreen25 from './IntroScreen25';
import IntroScreen26 from './IntroScreen26';
import IntroScreen27 from './IntroScreen27';
import IntroScreen28 from './IntroScreen28';
import IntroScreen29 from './IntroScreen29';
import IntroScreen30 from './IntroScreen30';
import IntroScreen31 from './IntroScreen31';
import IntroScreen32 from './IntroScreen32';
import IntroScreen33 from './IntroScreen33';
import IntroScreen34 from './IntroScreen34';
import IntroScreen35 from './IntroScreen35';
import IntroScreen36 from './IntroScreen36';
import IntroScreen37 from './IntroScreen37';
import IntroScreen38 from './IntroScreen38';

const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

const Stack = createStackNavigator();

export default function App() {
 return (
    <NavigationContainer>
      <Stack.Navigator
	  screenOptions={{
		  headerShown: false,
		  cardStyleInterpolator: forFade,
	   }}>
		<Stack.Screen name="1" component={IntroScreen1} />
		<Stack.Screen name="2" component={IntroScreen2} />
		<Stack.Screen name="3" component={IntroScreen3} />
		<Stack.Screen name="4" component={IntroScreen4} />
		<Stack.Screen name="5" component={IntroScreen5} />
		<Stack.Screen name="6" component={IntroScreen6} />
		<Stack.Screen name="7" component={IntroScreen7} />
		<Stack.Screen name="8" component={IntroScreen8} />
		<Stack.Screen name="9" component={IntroScreen9} />
		<Stack.Screen name="10" component={IntroScreen10} />
		<Stack.Screen name="11" component={IntroScreen11} />
		<Stack.Screen name="12" component={IntroScreen12} />
		<Stack.Screen name="13" component={IntroScreen13} />
		<Stack.Screen name="14" component={IntroScreen14} />
		<Stack.Screen name="15" component={IntroScreen15} />
		<Stack.Screen name="16" component={IntroScreen16} />
		<Stack.Screen name="17" component={IntroScreen17} />
		<Stack.Screen name="18" component={IntroScreen18} />
		<Stack.Screen name="19" component={IntroScreen19} />
		<Stack.Screen name="20" component={IntroScreen20} />
		<Stack.Screen name="21" component={IntroScreen21} />
		<Stack.Screen name="22" component={IntroScreen22} />
		<Stack.Screen name="23" component={IntroScreen23} />
		<Stack.Screen name="24" component={IntroScreen24} />
		<Stack.Screen name="25" component={IntroScreen25} />
		<Stack.Screen name="26" component={IntroScreen26} />
		<Stack.Screen name="27" component={IntroScreen27} />
		<Stack.Screen name="28" component={IntroScreen28} />
		<Stack.Screen name="29" component={IntroScreen29} />
		<Stack.Screen name="30" component={IntroScreen30} />
		<Stack.Screen name="31" component={IntroScreen31} />
		<Stack.Screen name="32" component={IntroScreen32} />
		<Stack.Screen name="33" component={IntroScreen33} />
		<Stack.Screen name="34" component={IntroScreen34} />
		<Stack.Screen name="35" component={IntroScreen35} />
		<Stack.Screen name="36" component={IntroScreen36} />
		<Stack.Screen name="37" component={IntroScreen37} />
		<Stack.Screen name="38" component={IntroScreen38} />
		
      </Stack.Navigator>
    </NavigationContainer>
  );
}