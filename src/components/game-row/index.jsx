import React from 'react';
import GameGallery from '../game-gallery';

const GameRow = ({ price, inWishList, name, images }) => {
  return (
    <li className='game-row'>
      <span className='game-name'>{name}</span>
      {inWishList && <span className='game-in-wish-list'>In wish list</span>}
      <GameGallery images={images} />
      <span className='game-price'>{price}</span>
    </li>
  );
};

export default GameRow;
