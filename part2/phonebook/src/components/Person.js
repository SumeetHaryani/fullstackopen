import React from 'react';

const Person = ({ persons }) => {
  return persons.map(person => (
    <p key={person.name}>
      {person.name}&nbsp;
      {person.number}
    </p>
  ));
};
export default Person;
