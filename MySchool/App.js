import { View, Text } from 'react-native'
import React from 'react'
import Home from './src/screens/Home'
import About from './src/screens/About';
import Contact from './src/screens/Contact';
import Course from './src/screens/Course';
import UserData from './src/screens/UserData';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} options={{
          headerShown: false,
          statusBarColor: "#7EC344"
        }} />

        <Stack.Screen name='Course' component={Course} options={{
          statusBarColor: "#7EC344",
        }} />

        <Stack.Screen name='About' component={About} options={{
          statusBarColor: "#7EC344",
        }} />

        <Stack.Screen name='Contact' component={Contact} options={{
          statusBarColor: "#7EC344",
        }} />

        <Stack.Screen name='Students' component={UserData} options={{
          statusBarColor: "#7EC344",
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App