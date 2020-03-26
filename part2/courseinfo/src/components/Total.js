import React from 'react';

const Total = ({ parts }) => {
  const TOTAL = parts.reduce((s, part) => s + part.exercises, 0);

  //console.log(total);
  return <h3>Number of exercises {TOTAL}</h3>;
};

export default Total;
