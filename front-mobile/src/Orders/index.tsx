import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import Header from '../header';
import OrderCard from '../OrderCard';

export default function Orders() {
    return (
        <>
            <Header />
            <ScrollView style={ styles.container }>
                <OrderCard />
            </ScrollView>
        </>   
    );
}

const styles = StyleSheet.create({
    container: {
        paddingRight: '5%',
        paddingLeft: '5%',
    }
});
