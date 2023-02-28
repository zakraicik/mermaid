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
        }, 1000);
    };

    return (
        <Background>
            <View style={styles.list}>
                <FlatList
                    data={itemData}
                    numColumns={3}
                    renderItem={({ item }) => <Item item={item} onPress={() => handlePress(item)} color={selectedItem === item ? color : '#FFFFFF'} />}
                    keyExtractor={(item) => item.alt}
                />
            </View>
        </Background>
    )
}

const styles = StyleSheet.create({
    list: {
        marginHorizontal: "auto",
        width: 350,
        borderRadius: 10,
    },
    item: {
        flex: 1,
        maxWidth: "33.33%",
        alignItems: "center",
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
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        paddingTop: 8
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
]