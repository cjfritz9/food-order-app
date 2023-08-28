import React from 'react';
import { Box, Button, List } from '@chakra-ui/react';
import styles from './Cart.module.css';
import CartModal from '../UI/CartModal';

const Cart: React.FC = () => {
  const cartItems = [{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map(
    (_item) => <Box />
  );
  return (
    <CartModal>
      <List>{cartItems}</List>
      <Box className={styles.total}>
        <Box as='span'>Total Amount</Box>
        <Box as='span'>35.62</Box>
      </Box>
      <Box className={styles.actions}>
        <Button className={styles['button--alt']}>Close</Button>
        <Button className={styles.button}>Order</Button>
      </Box>
    </CartModal>
  );
};

export default Cart;
