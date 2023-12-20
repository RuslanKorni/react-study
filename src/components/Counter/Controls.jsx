import React from 'react';
import { Controls, Button } from './Counter.styled';

const Control = ({ onIncrement, onDecrement }) => {
  return (
    <Controls>
      <Button type="button" onClick={onIncrement}>
        Увеличить на 1
      </Button>
      <Button type="button" onClick={onDecrement}>
        Уменьшить на 1
      </Button>
    </Controls>
  );
};

export default Control;
