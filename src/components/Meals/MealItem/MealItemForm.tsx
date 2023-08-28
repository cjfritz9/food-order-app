import React, { useRef, useState } from 'react';
import { Button, FormControl, Text } from '@chakra-ui/react';
import styles from './MealItemForm.module.css';
import QuantityInput from '../../UI/QuantityInput';

interface Props {
  id: string;
  onAddToCart: (enteredAmount: number) => void;
}

const MealItemForm: React.FC<Props> = ({ id, onAddToCart }) => {
  const [isAmountValid, setIsAmountValid] = useState(true);
  const amountInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = () => {
    console.log(amountInputRef.current);
    if (!amountInputRef.current) return;

    const enteredAmount = +amountInputRef.current.value;
    console.log(enteredAmount);

    if (
      enteredAmount.toString().trim().length === 0 ||
      enteredAmount < 1 ||
      enteredAmount > 5
    ) {
      setIsAmountValid(false);
      return;
    }
    onAddToCart(enteredAmount);
  };

  return (
    <FormControl className={styles.form}>
      <QuantityInput
        ref={amountInputRef}
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
      <Button onClick={submitHandler}>Add</Button>
      {!isAmountValid && (
        <Text color='red.400'>Please enter a valid amount 1-5</Text>
      )}
    </FormControl>
  );
};

export default MealItemForm;
