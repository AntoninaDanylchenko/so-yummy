import React, { useState } from "react";
import styled from "@emotion/styled";

const StyledBurgerLoader = styled.div`
  display: inline-block;
  position: relative;
  width: 40px;
  height: 40px;
`;

const BurgerLine = styled.span`
  display: block;
  position: absolute;
  width: 32px;
  height: 4px;
  border-radius: 4px;
  background-color: ${({ color }) => color};
  opacity: ${({ opacity }) => opacity};
  transform-origin: center;
  transition: all 0.2s ease-out;

  &:nth-of-type(1) {
    top: 8px;
    left: 4px;
    transform: ${({ isOpen }) =>
      isOpen ? "rotate(45deg) translate(2px, 2px)" : "rotate(0)"};
  }

  &:nth-of-type(2) {
    top: 18px;
    left: 4px;
    transform: ${({ isOpen }) =>
      isOpen ? "translateX(30px) scale(0)" : "translateX(0) scale(1)"};
    opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
  }

  &:nth-of-type(3) {
    top: 18px;
    left: 4px;
    transform: ${({ isOpen }) =>
      isOpen ? "rotate(-45deg) translate(1px, -1px)" : "rotate(0)"};
  }
`;

const BurgerLoader = ({ colors }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledBurgerLoader onClick={handleClick}>
      {colors.map((color, index) => (
        <BurgerLine
          key={index}
          isOpen={isOpen}
          color={color}
          opacity={(index + 1) / colors.length}
        />
      ))}
    </StyledBurgerLoader>
  );
};

export default BurgerLoader;