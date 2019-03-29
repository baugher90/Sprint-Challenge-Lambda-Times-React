import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import Loader from 'react-loader-spinner';

const Cards = props => {
  if (props.cards.length === 0) {
    console.log("LoaderRunning")
    return <Loader type="ThreeDots" color="#000000" height="100" width="100" />;
  }
  return (
    <div className="cards-container">
      {props.cards.map((card,index)=>(
        <Card 
        key={index}
        card={card}
        />
      ))}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props
Cards.ProptTypes = {
  cards: PropTypes.arrayOf( PropTypes.shape( {
      headline: PropTypes.string,
      tab: PropTypes.string,
      img: PropTypes.string,
      author: PropTypes.string
  } ) )
};

export default Cards;