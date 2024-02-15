import React from 'react';

const GameGallery = ({ images }) => {
  images = JSON.parse(images.replace(/'/gm, '"'));
  return (
    <div className='game-gallery'>
      {images?.map((img, idx) => (
        <img src={img} key={idx} alt='Preview' />
      ))}
    </div>
  );
};

export default GameGallery;
