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
        <Stack.Screen name="Home" component={Home} />

        <Stack.Screen name='Course' component={Course} />

        <Stack.Screen name='About' component={About} />

        <Stack.Screen name='Contact' component={Contact} />

        <Stack.Screen name='Students' component={UserData} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App