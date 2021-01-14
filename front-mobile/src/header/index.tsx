import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function header() {
    return (
        <View style={ styles.container }>
            <Image source={ require('./imgs/logo.png') } />
            <Text style={ styles.text }>DS Delivery</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#DA5C5C',
        height: 90,
        paddingTop: 50,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 18,
        fontFamily: 'OpenSans_700Bold',
        lineHeight: 25,
        letterSpacing: -0.024,
        color: 'white',
        marginLeft: 15
    },
});
