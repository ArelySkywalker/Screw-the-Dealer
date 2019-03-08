import React from 'react';
import { View, Text } from 'react-native';

export default CardDetail = (props) => {
    return (
        <View>
            <Text>{ props.card.value }</Text>
        </View>
    );
};