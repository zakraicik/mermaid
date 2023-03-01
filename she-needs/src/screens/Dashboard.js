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

export default function Dashboard({ navigation }) {
    return (
        <MyTabs />
    )
}