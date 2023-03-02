import React, { createContext, useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Dashboard, SettingsScreen, NeedsScreen } from './src/screens'
import { UserDataContext } from './src/core/UserDataContext';
import SplashScreen from './src/screens/SplashScreen'; // Import SplashScreen here

const Stack = createStackNavigator()

export default function App() {
  const [userData, setUserData] = React.useState({});
  const [loading, setLoading] = useState(true);

  function updateUserData(newData) {
    setUserData(newData);
  }

  useEffect(() => {
    // Wait for 2 seconds and then hide the splash screen
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <SplashScreen />;
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