import * as React from 'react';
import Background from '../components/Background'
import { Alert, View, FlatList, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import Icon from "@expo/vector-icons/MaterialCommunityIcons";


const Item = ({ item, onPress, color }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.item}>
                <View style={[styles.iconContainer, { backgroundColor: color }]}>
                    {item.icon}
                    <Text style={styles.label}>{item.label}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};


export default function NeedsScreen() {
    const [selectedItem, setSelectedItem] = React.useState(null);
    const [color, setColor] = React.useState('#FFFFFF');

    const handlePress = (item) => {
        console.log('Button pressed:', item.label);
        setSelectedItem(item);
        setColor('#ccc');
        setTimeout(() => {
            setSelectedItem(null);
            setColor('#FFFFFF');
        }, 25);

        if (item.label === "SOMETHING\nELSE") {
            Alert.prompt(
                'Enter something',
                'What do you want to do during your alone time?',
                (text) => console.log('User entered:', text)
            );
        }

    };

    return (
        <Background>
            <View style={styles.list}>
                <FlatList
                    data={itemData}
                    numColumns={2}
                    renderItem={({ item }) => <Item item={item} onPress={() => handlePress(item)} color={selectedItem === item ? color : '#FFFFFF'} />}
                    keyExtractor={(item) => item.label}
                />
            </View>
        </Background>
    )
}

const styles = StyleSheet.create({
    list: {
        marginHorizontal: "auto",
        width: 250,
        borderRadius: 10,

    },
    item: {
        flex: 1,
        maxWidth: "50%",
        alignItems: "center",
        paddingTop: 20
    },
    iconContainer: {
        width: 100,
        height: 100,
        borderRadius: 70,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 8,

    },
    label: {
        fontSize: 12,
        fontWeight: "bold",
        textAlign: "center",
        paddingTop: 5
    },
})


const itemData = [
    {
        label: "FOOD",
        icon: <Icon name="food" size={32} color="#000" />,
    },
    {
        label: "SLEEP",
        icon: <Icon name="bed" size={32} color="#000" />,
    },
    {
        label: "WINE",
        icon: <Icon name="glass-wine" size={32} color="#000" />,
    },
    {
        label: "DANCE\nPARTY",
        icon: <Icon name="human-female-dance" size={32} color="#000" />,
    },
    {
        label: "SEXY\nTIME",
        icon: <Icon name="cards-heart" size={32} color="#000" />,
    },
    {
        label: "SOMETHING\nELSE",
        icon: <Icon name="account-search" size={32} color="#000" />,
    },
]