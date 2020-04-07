import React from 'react';

const Person = (props) => {
  console.log("Person -> props", props)
  return props.persons.map(person => (
    <p key={person.name}>
      {person.name}&nbsp;
      {person.number}
      <button onClick={()=>props.handleDelete(person.id,person.name)}>delete</button>
    </p>
  ));
};
export default Person;
