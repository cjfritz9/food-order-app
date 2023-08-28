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

type Ref = HTMLInputElement | null;

const QuantityInput = React.forwardRef<Ref, Props>(({ label, input }, ref) => {
  return (
    <Box className={styles.input}>
      <FormLabel htmlFor={input.id}>{label}</FormLabel>
      <Input ref={ref} {...input} />
    </Box>
  );
});

export default QuantityInput;
