import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const course = {
    name: 'Half Stack application development',
    part: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  };
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.part} />
      <Total parts={course.part} />
    </div>
  );
};

const Header = props => {
  console.log(props);
  return <h1>{props.course}</h1>;
};
const Part = props => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  );
};
const Content = props => {
  return (
    <div>
      <Part part={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part part={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Part part={props.parts[2].name} exercises={props.parts[2].exercises} />
    </div>
  );
};

const Total = props => {
  let total = 0;
  props.parts.forEach(item => {
    total += item.exercises;
  });

  return <p>Number of exercises {total}</p>;
};
ReactDOM.render(<App />, document.getElementById('root'));
