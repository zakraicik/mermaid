import React, { createContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Dashboard, SettingsScreen, NeedsScreen } from './src/screens'
import { UserDataContext } from './src/core/UserDataContext';

const Stack = createStackNavigator()

export default function App() {
  const [userData, setUserData] = React.useState({});

  function updateUserData(newData) {
    setUserData(newData);
  }

  return (
    <UserDataContext.Provider value={{ userData, setUserData }}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Dashboard"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
          <Stack.Screen name="Needs" component={NeedsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserDataContext.Provider>

  )
}