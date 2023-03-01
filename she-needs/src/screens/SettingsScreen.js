import React, { useState, useEffect, useContext } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { themes } from '../core/theme';
import Background from '../components/Background';

export default function SettingsScreen() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [selectedTheme, setSelectedTheme] = useState(themes.find(theme => theme.id === 1) || themes[0]);

    const settings = {
        name,
        phone,
        selectedTheme
    };

    useEffect(() => {
        // Load the saved name, phone number, and theme when the component mounts
        AsyncStorage.getItem('userData').then((data) => {
            if (data !== null) {
                const { name, phone, selectedTheme } = JSON.parse(data);
                setName(name);
                setPhone(phone);
                setSelectedTheme(selectedTheme || themes[0]);
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

    const handleThemeChange = (theme) => {
        setSelectedTheme(theme);
        saveUserData();
    };


    const saveUserData = async () => {
        try {
            const data = JSON.stringify({ name, phone, selectedTheme });
            await AsyncStorage.setItem('userData', data);
        } catch (error) {
            console.error(error);
        }
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
                <View style={styles.item}>
                    <Text style={styles.label}>SELECT THEME</Text>
                    <View style={styles.themeContainer}>
                        {themes.map((theme) => (
                            <TouchableOpacity
                                key={theme.id}
                                style={[
                                    styles.themeButton,
                                    selectedTheme && selectedTheme.id === theme.id && styles.selectedThemeButton,
                                ]}
                                onPress={() => handleThemeChange(theme)}
                            >
                                <View style={[styles.themePreview, { backgroundColor: theme.colors.primary }]} />
                                <Text style={styles.themeName}>{theme.name}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </View>
        </Background>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
    },
    item: {
        marginBottom: 25,
    },
    label: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 8,
        color: '#e29578',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ffd8be',
        borderRadius: 6,
        padding: 8,
        fontSize: 16,
        backgroundColor: '#ffddd2',
        color: '#e29578',
    },
    themeContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    themeButton: {
        width: '48%',
        height: 80,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    selectedThemeButton: {
        borderWidth: 2,
        borderColor: '#e29578',
    },
    themePreview: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginBottom: 8,
    },
    themeName: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#e29578',
    },
});
