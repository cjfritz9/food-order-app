import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import { CartProvider } from './context/Cart.context';

const App = () => {
  const [showCart, setShowCart] = useState(false);

  const cartDisplayHandler = (option: boolean) => {
    setShowCart(option);
  }

  return (
    <CartProvider>
      {showCart && <Cart onDisplayCart={cartDisplayHandler} />}
      <Header onDisplayCart={cartDisplayHandler} />
      <Box as='main'>
        <Meals />
      </Box>
    </CartProvider>
  );
};

export default App;
