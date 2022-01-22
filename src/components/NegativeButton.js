import React, { useContext } from 'react';
import { NumberContext } from './Provider';

const NegativeButton = () => {
  const { handleToggleNegative } = useContext(NumberContext);
  return (
    <button type="button" className="pink-button" onClick={() => handleToggleNegative()}>
      -/+
    </button>
  );
};

export default NegativeButton;