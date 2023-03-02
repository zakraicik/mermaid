import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import NeedsScreen from './NeedsScreen'
import SettingsScreen from './SettingsScreen'

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Needs"
            screenOptions={{
                tabBarActiveTintColor: '#ffcad4',
                tabBarInactiveTintColor: '#ffddd2',
                tabBarStyle: { backgroundColor: '#e29578' }
            }}
        >
            <Tab.Screen
                name="Needs"
                component={NeedsScreen}
                options={{
                    tabBarLabel: 'Needs',
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="clipboard-list" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    tabBarLabel: 'Settings',
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account-settings" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default function Dashboard() { //removed { navigation } if this ever becomes an issue. 


    return (
        <MyTabs />

    )
}
