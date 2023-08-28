import React from 'react';
import { Box, Button, Flex } from '@chakra-ui/react';
import CartIcon from '../Cart/CartIcon';
import styles from './CartButton.module.css';

const CartButton: React.FC = () => {
  return (
    <Button className={styles.button}>
      <Flex alignItems='center'>
        <Box as='span' className={styles.icon}>
          <CartIcon />
        </Box>
        <Box className={styles.badge}>3</Box>
      </Flex>
    </Button>
  );
};

export default CartButton;
