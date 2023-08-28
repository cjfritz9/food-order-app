import React from 'react';
import { Box, Flex, Heading, Image } from '@chakra-ui/react';
import hero from '../../assets/meals.jpg';
import CartButton from './CartButton';
import styles from './Header.module.css'

interface Props {
  onDisplayCart: (option: boolean) => void;
}

const Header: React.FC<Props> = ({ onDisplayCart }) => {
  return (
    <>
      <Flex
        className={styles.header}
      >
        <Heading as='h1'>React Meals</Heading>
        <CartButton onDisplayCart={onDisplayCart} />
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
