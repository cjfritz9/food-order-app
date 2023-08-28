import React from 'react';
import { Box, Flex, Heading, Image } from '@chakra-ui/react';
import hero from '../../assets/meals.jpg';
import CartButton from './CartButton';
import styles from './Header.module.css'

const Header: React.FC = () => {
  return (
    <>
      <Flex
        className={styles.header}
      >
        <Heading as='h1'>React Meals</Heading>
        <CartButton />
      </Flex>
      <Box
        className={styles['main-image']}
      >
        <Image
          src={hero}
          alt='Table with a variety of food'
          w='110%'
          h='100%'
          objectFit='cover'
          transform='rotateZ(-5deg) translateY(-4rem) translateX(-1rem)'
        />
      </Box>
    </>
  );
};

export default Header;
