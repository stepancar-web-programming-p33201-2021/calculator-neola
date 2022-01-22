import React, { useContext } from 'react';
import { NumberContext } from './Provider';

const BackButton = () => {
  const { handleBackButton } = useContext(NumberContext);
  return (
    <button type="button" className="pink-button" onClick={() => handleBackButton()}>
      &#8592;
    </button>
  );
};

export default BackButton;