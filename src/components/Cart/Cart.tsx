import React, { useContext } from 'react';
import { Box, Button, List, ListItem } from '@chakra-ui/react';
import styles from './Cart.module.css';
import CartModal from '../UI/CartModal';
import { CartContext, CartInterface } from '../../context/Cart.context';
import CartItem from './CartItem';

interface Props {
  onDisplayCart: (option: boolean) => void;
}

const Cart: React.FC<Props> = ({ onDisplayCart }) => {
  const { items, totalAmount } = useContext(CartContext) as CartInterface;

  const hasItems = items.length > 0;

  const handleRemoveItem = (id: string) => {
    console.log(id);
  };

  const handleAddItem = (item: any) => {
    console.log(item);
  };

  return (
    <CartModal onDisplayCart={onDisplayCart}>
      <List className={styles['cart-items']}>
        {items.map((item) => (
          <CartItem
            key={item.id}
            {...item}
            onAdd={() => handleAddItem(item)}
            onRemove={() => handleRemoveItem(item.id)}
          ></CartItem>
        ))}
      </List>
      <Box className={styles.total}>
        <Box as='span'>Total Amount</Box>
        <Box as='span'>{`$${totalAmount.toFixed(2)}`}</Box>
      </Box>
      <Box className={styles.actions}>
        <Button
          className={styles['button--alt']}
          onClick={() => onDisplayCart(false)}
        >
          Close
        </Button>
        {hasItems && <Button className={styles.button}>Order</Button>}
      </Box>
    </CartModal>
  );
};

export default Cart;
