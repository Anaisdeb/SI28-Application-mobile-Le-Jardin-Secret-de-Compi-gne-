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

const Stack = createStackNavigator();

export default function App() {
 return (
    <NavigationContainer>
      <Stack.Navigator>
		<Stack.Screen name="1" component={IntroScreen1} />
		<Stack.Screen name="2" component={IntroScreen2} />
		<Stack.Screen name="3" component={IntroScreen3} />
		<Stack.Screen name="4" component={IntroScreen4} />
		<Stack.Screen name="5" component={IntroScreen5} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}