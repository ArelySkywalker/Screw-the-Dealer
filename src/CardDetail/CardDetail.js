import React from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

export default CardDetail = (props) => {
    return (
        <Card>
            <CardSection>
                <Text>{ props.card.value }</Text>
            </CardSection>
        </Card>
    );
};