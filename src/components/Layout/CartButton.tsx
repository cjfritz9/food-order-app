import React, { useContext } from 'react';
import { Box, Button, Flex } from '@chakra-ui/react';
import CartIcon from '../Cart/CartIcon';
import styles from './CartButton.module.css';
import { CartContext, CartInterface } from '../../context/Cart.context';

interface Props {
  onDisplayCart: (option: boolean) => void;
}

const CartButton: React.FC<Props> = ({ onDisplayCart }) => {
  const { items } = useContext(CartContext) as CartInterface;

  const totalCartItems = items.reduce((curNumber: number, item: any) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <Button className={styles.button} onClick={() => onDisplayCart(true)}>
      <Flex alignItems='center'>
        <Box as='span' className={styles.icon}>
          <CartIcon />
        </Box>
        <Box className={styles.badge}>{totalCartItems}</Box>
      </Flex>
    </Button>
  );
};

export default CartButton;
