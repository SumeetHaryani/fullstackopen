import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Country from './components/Country';
import CountryList from './components/CountryList';

function App() {
  const [countries, setNewCountries] = useState([]);
  const [search, setNewSearch] = useState('');
  const [selectedCountry, setNewSelectedCountry] = useState({});

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all').then(response => {
      setNewCountries(response.data);
    });
  }, []);

  const searchedCountriesList = countries.filter(country =>
    country.name.toLowerCase().includes(search)
  );

  const handleShow = country => {
    setNewSelectedCountry(country);
  };

  const countriesToShow = () => {
    if (search === '') {
      return;
    } else if (searchedCountriesList.length >= 10) {
      return 'Too many matches, specify another filter ';
    } else if (searchedCountriesList.length === 1) {
      return <Country country={searchedCountriesList[0]} />;
    } else {
      return (
        <CountryList
          countries={searchedCountriesList}
          handleShow={handleShow}
          showCountry={selectedCountry}
        />
      );
    }
  };
  // console.log('App -> searchedCountriesList', searchedCountriesList);
  const handleSearchChange = event => {
    setNewSearch(event.target.value);
    setNewSelectedCountry({});
  };

  return (
    <div>
      find Countries
      <input type='text' value={search} onChange={handleSearchChange}></input>
      <br />
      {countriesToShow()}
    </div>
  );
}

export default App;
