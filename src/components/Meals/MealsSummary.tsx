import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import styles from './MealsSummary.module.css';

const MealsSummary: React.FC = () => {
  return (
    <Box as='section' className={styles.summary}>
      <Heading>Delicious Food, Delivered To You</Heading>
      <Text>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </Text>
      <Text>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </Text>
    </Box>
  );
};

export default MealsSummary;
