import React from 'react';
import Part from './Part';
const Content = ({ parts }) => {
  //console.log('Content -> parts', parts);
  return parts.map(({ id, name, exercises }) => (
    <Part key={id} part={name} exercises={exercises} />
  ));
};
export default Content;
