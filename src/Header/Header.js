import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class Header extends Component {
    render() {
      return (
            <View style={styles.headContainer}>
                <Text style={styles.title}>{ this.props.headerText }</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#dddddd',
        height: 60,
        padding: 15,
        position: 'relative',
    },
    title: {
        alignItems: 'center',
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

