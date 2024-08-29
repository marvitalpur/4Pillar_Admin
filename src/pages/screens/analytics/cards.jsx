// AdminPanel.js
import React from 'react';
import { Grid } from '@mui/material';
import CardsGrid from './cardsGrid';

const Cards = () => {
  // Sample data for demonstration purposes
  const data = [
    { title: 'Total Sales', value: '$1.2M' },
    { title: 'Total Downloads', value: '$389k' },
    { title: 'Total Users', value: '$155k' },
  ];

  return (
    <Grid container spacing={2}>
      {data.map((item, index) => (
        <CardsGrid key={index} title={item.title} value={item.value} />
      ))}
    </Grid>
  );
};

export default Cards;
