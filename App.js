import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultDetailsScreen from './src/screens/ResultDetailsScreen';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Search" 
          options={{ title: 'Business Search' }}
          component={ SearchScreen } 
        />
        <Stack.Screen 
          name="ResultDetails" 
          options={{ title: 'Business Details' }}
          component={ ResultDetailsScreen } 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;