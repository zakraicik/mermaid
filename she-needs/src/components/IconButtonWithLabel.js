import React from 'react';
import { IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Text } from 'react-native'

const useStyles = makeStyles(theme => ({
    iconButtonLabel: {
        display: 'flex',
        flexDirection: 'column',
    },
}));

export default function IconButtonWithLabel() {
    const classes = useStyles();

    return (
        <IconButton classes={{ label: classes.iconButtonLabel }}>
            icon={props => <Icon name="food" {...props} />}
            <Text>hello</Text>
        </IconButton>
    );
}