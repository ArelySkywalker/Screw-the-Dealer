import React from 'react';
import { Text, View } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

export default CardDetail = (props) => {
    return (
        <Card>
            <CardSection style={ styles.sectionHeader }>
                <Text>{ props.card.value }</Text>
            </CardSection>
        </Card>
    );
};

const styles = {
    sectionHeader: {
        padding: 20
    },
};