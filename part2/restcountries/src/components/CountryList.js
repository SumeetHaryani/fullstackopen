import React from 'react';
import Country from './Country';
const CountryList = ({ countries, handleShow, showCountry }) => {
  return (
    <div>
      {countries.map(country => (
        <p key={country.name}>
          {country.name}
          <button onClick={() => handleShow(country)}>Show</button>
          <br />
        </p>
      ))}
      {Object.keys(showCountry).length === 0 ? (
        ''
      ) : (
        <Country country={showCountry} />
      )}
    </div>
  );
};
export default CountryList;
