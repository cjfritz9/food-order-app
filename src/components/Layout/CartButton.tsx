import React, { useContext, useEffect, useState } from 'react';
import { Box, Button, Flex } from '@chakra-ui/react';
import CartIcon from '../Cart/CartIcon';
import styles from './CartButton.module.css';
import { CartContext, CartInterface } from '../../context/Cart.context';

interface Props {
  onDisplayCart: (option: boolean) => void;
}

const CartButton: React.FC<Props> = ({ onDisplayCart }) => {
  const { items } = useContext(CartContext) as CartInterface;
  const [isHighlighted, setIsHighlighted] = useState(false)

  const totalCartItems = items.reduce((curNumber: number, item: any) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${styles.button} ${isHighlighted ? styles.bump : ''}`;

  useEffect(() => {
    if (items.length === 0) return;

    setIsHighlighted(true);
    const timer = setTimeout(() => {
      setIsHighlighted(false)
    }, 300);

    return () => {
      clearTimeout(timer);
    }
  }, [items])

  return (
    <Button className={btnClasses} onClick={() => onDisplayCart(true)}>
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
