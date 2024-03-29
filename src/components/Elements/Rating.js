import React from 'react';

const Rating = ({rating}) => {

  let ratingArray = Array(5).fill(false);
  
  // set element to true if less than rating value 
  for(let i = 0; i < rating ; i++){
    ratingArray[i] = true;
  }

  return (
    <>
      { ratingArray.map((star, index) => (
        star ? ( 
          <i key={ index } className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i> 
        ) : (
          <i key={ index } className="text-lg bi bi-star text-yellow-500 mr-1"></i>
        )
      ))
    }  
    </>
  );
}

export default Rating;