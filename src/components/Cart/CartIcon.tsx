import React from 'react';
import { Icon } from '@chakra-ui/react';
import { RiShoppingCartLine } from 'react-icons/ri';

const CartIcon: React.FC = () => {
  return <Icon as={RiShoppingCartLine} fontSize='20px' />;
};

export default CartIcon;
