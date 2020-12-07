import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { Camera } from 'expo-camera';
import * as Location from 'expo-location';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import IntroScreen1 from './IntroScreen1';
import DetailsScreen from './Test';

const Stack = createStackNavigator();

export default function App() {
 return (
    <NavigationContainer>
      <Stack.Navigator>
		<Stack.Screen name="Introduction" component={IntroScreen1} />
		<Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}