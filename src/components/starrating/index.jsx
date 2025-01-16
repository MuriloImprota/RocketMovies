import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { StarContainer } from './style'; 

const StarRating = ({ size = 12 }) => { // Adiciona a prop size com valor padrão
  const [rating, setRating] = useState(0);
  const totalStars = 5; 

  const handleClick = (value) => {
    setRating(value); 
  };

  return (
    <StarContainer>
      {Array.from({ length: totalStars }, (_, index) => {
        const starValue = index + 1;
        return (
          <FaStar
            key={starValue}
            size={size} // Usa a prop size aqui
            color={starValue <= rating ? '#FF859B' : '#e4e5e9'}
            onClick={() => handleClick(starValue)}
            style={{ cursor: 'pointer' }}
          />
        );
      })}
    </StarContainer>
  );
};

export default StarRating;
