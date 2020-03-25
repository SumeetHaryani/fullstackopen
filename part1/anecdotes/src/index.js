import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};
const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 });

  const getRandomNo = () => {
    return Math.floor(Math.random() * Math.floor(anecdotes.length));
  };

  const getAnecdote = () => {
    setSelected(getRandomNo());
  };

  const setVote = () => {
    // console.log(points)
    const copyPoints = { ...points };
    copyPoints[selected] += 1;
    setPoints(copyPoints);
  };

  const getMostVotesIndex = () => {
    let max = 0;
    let maxIndex = 0;
    for (const index in points) {
      if (max < points[index]) {
        max = points[index];
        maxIndex = index;
      }
    }
    return maxIndex;
  };
  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <p>Has {points[selected]} votes</p>
      <br></br>
      <Button text='Vote' handleClick={() => setVote()}>
        {' '}
      </Button>
      <Button text='Next Anecdote' handleClick={() => getAnecdote()} />
      <h1>Anecdote with most votes</h1>
      <p>
        {anecdotes[getMostVotesIndex()]} <br /> has {points[getMostVotesIndex()]} votes.
      </p>
    </div>
  );
};

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));
