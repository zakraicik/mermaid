import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Logo from '../components/Logo'


const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <Logo />
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default SplashScreen;