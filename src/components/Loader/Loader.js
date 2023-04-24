import React from 'react';
import BurgerSVG from '../../burger-loader.svg';
import './loader.styled.js';

const BurgerLoader = () => {
  return (
    <div className="burger-loader">
      <BurgerSVG className="burger-svg" />
    </div>
  );
};

export default BurgerLoader;