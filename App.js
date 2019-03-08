/**
 * Screw the Dealer React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from './src/Header/Header';
import DeckList from './src/DeckList/DeckList';


// const instructions = Platform.select({
//     ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//     android:
//         'Double tap R on your keyboard to reload,\n' +
//         'Shake or press menu button for dev menu',
// });


export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header headerText={ 'Screw the Dealer' } />
                <ScrollView>
                    <DeckList />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF',
        flex: 1,
    },
});
