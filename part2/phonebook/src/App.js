import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import Person from './components/Person';
import PersonForm from './components/PersonForm';
import phoneService from './services/phone';
import phone from './services/phone';

function App() {
  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setNewFilter] = useState('');
  useEffect(() => {
    phoneService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);
  const checkUniqueName = () => {
    const arr = persons.filter((person) => person.name === newName);
    return { unique: arr.length > 0 ? false : true, obj: arr[0] };
  };

  const addPerson = (event) => {
    event.preventDefault();
    const res = checkUniqueName();
    if (!res.unique || newName.length === 0) {
      const result = window.confirm(
        `${newName} is already added to phonebook, replace the old number with a new one?`
      );
      if (result) {
        const personObject = { ...res.obj, number: newNumber };
        const id = personObject.id;
        phoneService.update(id, personObject).then((returnedPerson) => {
          setPersons(
            persons.map((person) =>
              person.id !== id ? person : returnedPerson
            )
          );
        });
      }
    } else {
      const personObject = { name: newName, number: newNumber };
      phoneService.create(personObject).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setNewName('');
        setNewNumber('');
      });
    }
  };
  
  const deletePerson = (id, name) => {
    //console.log("deletePerson -> id", id)
    const result = window.confirm(`Delete ${name} ?`);
    if (result) {
      phoneService
        .deletePerson(id)
        .then(() => setPersons(persons.filter((person) => person.id != id)));
    }
  };
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value);
  };
  const personsListToShow =
    filter === ''
      ? persons
      : persons.filter((person) =>
          person.name.toLowerCase().includes(filter.toLowerCase())
        );
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filter} onChange={handleFilterChange} />
      <h1>Add a new </h1>
      <PersonForm
        onSubmit={addPerson}
        name={{ value: newName, onChange: handleNameChange }}
        number={{ value: newNumber, onChange: handleNumberChange }}
      />
      <h2>Numbers</h2>
      <Person persons={personsListToShow} handleDelete={deletePerson} />
    </div>
  );
}

export default App;
