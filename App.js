import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import HomeScreen from './Screens/HomeScreen';
import SpaceCraftsScreen from './Screens/SpaceCraft';
import DailyPicScreen from './Screens/DailyPic';
import StarMapScreen from './Screens/StarMap';
//import 'react-native-gesture-handler'; //Enhaces touch experiences
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App (){
  return(
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown : false}}>
        <Stack.Screen name = "Home" component = {HomeScreen}/>
        <Stack.Screen name = "SpaceCrafts" component = {SpaceCraftsScreen}/>
        <Stack.Screen name = "DailyPic" component = {DailyPicScreen}/>
        <Stack.Screen name = "StarMap" component = {StarMapScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}



export default App;
