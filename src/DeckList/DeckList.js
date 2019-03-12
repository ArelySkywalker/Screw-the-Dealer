import React, {Component} from 'react';
import { ScrollView, View } from 'react-native';
import CardDetail from '../CardDetail/CardDetail';


export default class DeckList extends Component {
    state = { mydeck: [] };


    componentWillMount() {
        fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=52')
            .then(response => response.json())
            .then(data => this.setState({ mydeck: data.cards }));
    }

    renderMyDeck() {
        return this.state.mydeck.map( card => 
            <CardDetail key={ card.code } card={ card } /> 
        );
    }


    render() {
        console.log(this.state);
      return (
            <ScrollView>
                { this.renderMyDeck() }
            </ScrollView>
        );
    }
}

