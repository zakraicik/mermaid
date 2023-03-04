import React, { createContext, useState, useEffect, useLayoutEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Dashboard, SettingsScreen, NeedsScreen } from './src/screens'
import { UserDataContext } from './src/core/UserDataContext';
import SplashScreen from './src/screens/SplashScreen'; // Import SplashScreen here

const Stack = createStackNavigator()

export default function App() {
  const [userData, setUserData] = React.useState({});
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false); // Add a state variable for fading out

  function updateUserData(newData) {
    setUserData(newData);
  }

  useLayoutEffect(() => {

    // Wait for 2 seconds and then start fading out the splash screen
    setTimeout(() => {
      setFadeOut(true);
    }, 4000);

    // Wait for 3.5 seconds and then hide the splash screen
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);

  if (loading) {
    return (
      <SplashScreen
        fadeOut={fadeOut}
        onAnimationEnd={() => {
          setFadeOut(false);
        }}
      />
    );
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
  );
}