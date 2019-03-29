import React from 'react';
import PropTypes from 'prop-types';
import {CardCont,Headline, Author, ImageCont} from '../StyledComponents';

const Card = props => {
  return (
    <CardCont className="card">
      <Headline className="headline">{props.card.headline}</Headline><span>{props.card.tab}</span>
      <Author className="author">
        <ImageCont className="img-container">
          <img src={props.card.img} alt={props.card.author} />
        </ImageCont>
        <span>By {props.card.author}</span>
      </Author>
    </CardCont>
  );
};

Card.propTypes = {
  card: PropTypes.shape({
    headline: PropTypes.string,
    tab:PropTypes.string,
    img: PropTypes.string,
    author: PropTypes.string
  })
};

export default Card;
