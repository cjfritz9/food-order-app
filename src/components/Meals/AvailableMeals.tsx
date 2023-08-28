import React from 'react';
import { Box, List } from '@chakra-ui/react';
import styles from './AvailableMeals.module.css';
import MealCard from '../UI/MealCard';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American',
    price: 12.99
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99
  }
];

const AvailableMeals: React.FC = () => {
  const mealsList = DUMMY_MEALS.map((meal) => <MealItem key={meal.id} {...meal} />);
  return (
    <Box as='section' className={styles.meals}>
      <MealCard>
        <List>{mealsList}</List>
      </MealCard>
    </Box>
  );
};

export default AvailableMeals;
