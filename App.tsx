/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {ContextProvider} from './src/context/contextProvider';
import {HomeScreen} from './src/screens/HomeScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {UserScreen} from './src/screens/UserScreen';
import {User} from './src/types';
type RootStackParamList = {
  Home: undefined;
  User: {user: User};
};
const Stack = createStackNavigator<RootStackParamList>();
function App(): React.JSX.Element {
  return (
    <ContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="User" component={UserScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ContextProvider>
  );
}

export default App;
