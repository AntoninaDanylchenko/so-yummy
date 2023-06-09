import React from 'react';
import { ThreeCircles } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div
      style={{
        position: 'fixed',
        zIndex: '10',
        transform: 'translate(-50%, -50%)',
        top: '50%',
        left: '50%',

      }}
    >
      <ThreeCircles
        height="150"
        width="150"
        color="#4fa94d"
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor="#8BAA36"
        innerCircleColor="#22252A"
        middleCircleColor="#8BAA36"
      ></ThreeCircles>
    </div>
  );
};
