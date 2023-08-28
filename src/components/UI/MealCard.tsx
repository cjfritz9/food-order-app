import React from 'react'
import { Box } from '@chakra-ui/react'
import styles from './MealCard.module.css'

interface Props {
  children: React.ReactNode
}

const MealCard: React.FC<Props> = ({ children }) => {
  return (
    <Box className={styles.card}>
      {children}
    </Box>
  );
}

export default MealCard;