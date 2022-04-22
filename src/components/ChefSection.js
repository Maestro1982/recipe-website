import React from 'react';
import ChefCard from './ChefCard';

function ChefSection() {
  const chefs = [
    {
      name: 'Juan Carlos',
      img: '/img/top-chefs/img_1.jpg',
      recipesCount: '10',
      cuisine: 'Mexican',
    },
    {
      name: 'Luke Borowitz ',
      img: '/img/top-chefs/img_2.jpg',
      recipesCount: '05',
      cuisine: 'Japanese',
    },
    {
      name: 'Paolo DiMarco',
      img: '/img/top-chefs/img_3.jpg',
      recipesCount: '13',
      cuisine: 'Italian',
    },
    {
      name: 'Chris Parker',
      img: '/img/top-chefs/img_4.jpg',
      recipesCount: '08',
      cuisine: 'American',
    },
    {
      name: 'Paul Bagette',
      img: '/img/top-chefs/img_5.jpg',
      recipesCount: '09',
      cuisine: 'French',
    },
    {
      name: 'Justin Powell',
      img: '/img/top-chefs/img_6.jpg',
      recipesCount: '04',
      cuisine: 'Indian',
    },
  ];
  return (
    <div className='section chef'>
      <h1 className='title'>Our Top Chefs</h1>
      <div className='top-chefs-container'>
        {chefs.map((chef) => (
          <ChefCard key={chef.name} chef={chef} />
        ))}
      </div>
    </div>
  );
}

export default ChefSection;
