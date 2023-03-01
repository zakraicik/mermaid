import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Background from '../components/Background'

export default function SettingsScreen() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    useEffect(() => {
        // Load the saved name and phone number when the component mounts
        AsyncStorage.getItem('userData').then((data) => {
            if (data !== null) {
                const { name, phone } = JSON.parse(data);
                setName(name);
                setPhone(phone);
            }
        });
    }, []);

    const handleNameChange = (text) => {
        setName(text);
        saveUserData();
    };

    const handlePhoneChange = (text) => {
        setPhone(text);
        saveUserData();
    };


    const saveUserData = async () => {
        const data = JSON.stringify({ name, phone });
        await AsyncStorage.setItem('userData', data);
    };

    return (
        <Background>
            <View style={styles.container}>
                <View style={styles.item}>
                    <Text style={styles.label}>NAME</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={handleNameChange}
                        value={name}
                        placeholder="Enter your name"
                    />
                </View>
                <View style={styles.item}>
                    <Text style={styles.label}>PHONE NUMBER</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={handlePhoneChange}
                        value={phone}
                        placeholder="Enter your phone number"
                    />
                </View>
            </View>
        </Background>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: "center",
    },
    item: {
        marginBottom: 25,

    },
    label: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 8,
        color: "#e29578",

    },
    input: {
        borderWidth: 1,
        borderColor: '#ffd8be',
        borderRadius: 6,
        padding: 8,
        fontSize: 16,
        backgroundColor: '#ffddd2',
        color: "#e29578"
    },
});