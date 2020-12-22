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
      </Stack.Navigator>
    </NavigationContainer>
  );
}