import React from 'react';
import { Button, FormControl } from '@chakra-ui/react';
import styles from './MealItemForm.module.css';
import QuantityInput from '../../UI/QuantityInput';

interface Props {
  id: string;
}

const MealItemForm: React.FC<Props> = ({ id }) => {
  return (
    <FormControl className={styles.form}>
      <QuantityInput
        label='Amount'
        input={{
          id: `amount_${id}`,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1'
        }}
      />
      <Button>Add</Button>
    </FormControl>
  );
};

export default MealItemForm;
