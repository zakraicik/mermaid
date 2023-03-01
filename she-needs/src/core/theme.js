import { DefaultTheme } from 'react-native-paper';

export const themes = [
    {
        id: 1,
        name: 'Default',
        colors: {
            ...DefaultTheme.colors,
            text: '#000000',
            primary: '#560CCE',
            secondary: '#414757',
            error: '#f13a59',
        },
    },
    {
        id: 2,
        name: 'Dark',
        colors: {
            ...DefaultTheme.colors,
            text: '#ffffff',
            primary: '#FF8C00',
            secondary: '#808080',
            error: '#f13a59',
        },
    },
    {
        id: 3,
        name: 'Light',
        colors: {
            ...DefaultTheme.colors,
            text: '#000000',
            primary: '#FA8072',
            secondary: '#F5F5F5',
            error: '#f13a59',
        },
    },
];
