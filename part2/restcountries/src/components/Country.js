import React from 'react';
import Weather from './Weather';

const Country = props => {
  const { name, capital, population, languages, flag } = props.country;
  return (
    <div>
      <h1>{name}</h1>
      <p>
        capital {capital} <br />
        population {population}
      </p>
      <h2>languages</h2>
      <ul>
        {languages.map(language => (
          <li key={language.name}>{language.name}</li>
        ))}
      </ul>
      <img width='200' src={flag} alt='flag'></img>
      <Weather capital={capital} />
    </div>
  );
};
export default Country;
