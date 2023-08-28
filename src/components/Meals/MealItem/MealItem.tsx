import React from 'react';
import { Box, Heading, ListItem } from '@chakra-ui/react';
import styles from './MealItem.module.css';
import MealItemForm from './MealItemForm';

interface Props {
  id: string;
  name: string;
  description: string;
  price: number;
}

const MealItem: React.FC<Props> = ({ id, name, description, price }) => {
  const formattedPrice = `$${price.toFixed(2)}`;

  return (
    <ListItem className={styles.meal}>
      <Box>
        <Heading as='h3'>{name}</Heading>
        <Box className={styles.description}>{description}</Box>
        <Box className={styles.price}>{formattedPrice}</Box>
      </Box>
      <Box>
        <MealItemForm id={id} />
      </Box>
    </ListItem>
  );
};

export default MealItem;
