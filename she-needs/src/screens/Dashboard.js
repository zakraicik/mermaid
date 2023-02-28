import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Alert, View, FlatList, Image, StyleSheet } from 'react-native'

import SettingsScreen from './SettingsScreen'
import NeedsScreen from './NeedsScreen'

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Needs"
            screenOptions={{
                tabBarActiveTintColor: '#e91e63',
            }}
        >
            <Tab.Screen
                name="Needs"
                component={NeedsScreen}
                options={{
                    tabBarLabel: 'Needs',
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
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account-settings" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default function Dashboard({ navigation }) {
    return (
        <MyTabs />
    )
}