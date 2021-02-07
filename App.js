import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SearchScreen from './src/screens/SearchScreen';
import ResultShowScreen from './src/screens/ResultShowScreen';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName='Business Search'>
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name='ShowResults' component={ResultShowScreen} options={{ title: 'Show Results' }} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
// const navigator = createStackNavigator(
//   {
//     Search: SearchScreen
//   }, {
//     initialRouteName: Search,
//     defaulNavigationOptions: {
//       title: 'Business Search'
//     }
//   }
// )

export default App