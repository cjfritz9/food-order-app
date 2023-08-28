import React from 'react';
import { Box, FormLabel, Input } from '@chakra-ui/react';
import styles from './QuantityInput.module.css';

interface Props {
  label: string;
  input: {
    id: string;
    type: string;
    min: string;
    max: string;
    step: string;
    defaultValue: string;
  };
}

const QuantityInput: React.FC<Props> = ({ label, input }) => {
  return (
    <Box className={styles.input}>
      <FormLabel htmlFor={input.id}>{label}</FormLabel>
      <Input {...input} />
    </Box>
  );
};

export default QuantityInput;
