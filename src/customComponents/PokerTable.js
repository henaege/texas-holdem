import React, {Component} from 'react'
import PokerHand from './PokerHand'
import Deck from '../utilityClasses/Deck.js'

let cards = new Deck()

class PokerTable extends Component{

    prepDeck(){
        cards.createDeck();
        cards.shuffleDeck();
    }

    render(){
        return(
            <div className="container">
            <div className="row">
                <div className="col s12 the-table center-align">
                    <PokerHand />
                    <PokerHand />
                    <PokerHand />
                </div>
            </div>
            </div>
        )
    }
}

export default PokerTable