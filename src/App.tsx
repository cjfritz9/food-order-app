import React from 'react';
import { Box } from '@chakra-ui/react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

const App = () => {
  return (
    <Box>
      <Cart />
      <Header />
      <Box as='main'>
        <Meals />
      </Box>
    </Box>
  );
};

export default App;
