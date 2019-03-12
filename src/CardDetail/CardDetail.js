import React from 'react';
import { Image, Text, View } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

export default CardDetail = ({ card }) => {
    const { value, suit, images } = card;
    const { sectionHeader, cardContainer, cardValue, cardSuit, cardImage } = styles;

    return (
        <Card>
            <CardSection style={ sectionHeader }>
                <View style={ cardContainer }>
                    <Image 
                        style={ cardImage }
                        source={{ uri: images.png }}
                    />
                </View>
            </CardSection>
            <CardSection>
                <Button onPress={ () => console.log(value) } />
            </CardSection>
        </Card>
    );
};

const styles = {
    sectionHeader: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    cardContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    cardImage: {
        height: 314,
        width: 226,
    }
};