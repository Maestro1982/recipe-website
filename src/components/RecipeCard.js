import React from 'react';
import CustomImage from './CustomImage';

function RecipeCard({ recipe }) {
  return (
    <div className='recipe-card'>
      <CustomImage imgSrc={recipe.image} pt='65%' />
      <div className='recipe-card-info'>
        <img className='author-img' src={recipe.authorImg} alt='' />
        <p className='recipe-title'>{recipe.title}</p>
        <p className='recipe-desc'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta,
          laudantium?
        </p>
        <a className='view-btn' href='#!'>
          view recipe
        </a>
      </div>
    </div>
  );
}

export default RecipeCard;
