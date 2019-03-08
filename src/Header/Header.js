import React, {Component} from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';


export default class Header extends Component {
    render() {
      return (
            <View style={styles.headContainer}>
                <View style={ styles.title }>
                    <Text style={ styles.titleText }>{ this.props.headerText }</Text>
                </View>
                <View style={ styles.gameDetails }>
                    <View style={ styles.sectionDealer }>
                        <View>
                            <Image 
                                style={{ width: 50, height: 50 }}
                                source={require('./images/user.png')}
                            />
                        </View>
                        <View style={ styles.dealerText }>
                            <Text>Dealer:</Text>
                            <Text>UserName</Text>
                        </View>
                    </View>
                    <View style={ styles.sectionPlayers }>
                        <View style={ styles.playersText }>
                            <Text>#</Text>
                            <Text>Players</Text>
                        </View>
                        <View>
                            <Image 
                                style={{ width: 50, height: 50 }}
                                source={require('./images/group.png')}
                            />
                        </View>
                    </View>
                </View>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    headContainer: {
        backgroundColor: '#dddddd',
        padding: 10
    },
    title: {
        borderWidth: 2,
        borderRadius: 0,
        borderColor: '#000',
        justifyContent: 'space-around',
        flexDirection: 'row',
        marginBottom: 20,
    },
    titleText: {
        fontSize: 20,
        margin: 10
    },  
    gameDetails: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    sectionDealer: {
        justifyContent: 'flex-start',
        flexDirection: 'row'
    },
    dealerText: {
        paddingLeft: 20
    },
    sectionPlayers:{
        justifyContent: 'flex-end',
        flexDirection: 'row'
    },
    playersText: {
        paddingRight: 20
    }
});

