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
      <Content content={course.part} />
      <Total items={course.part} />
    </div>
  );
};

const Header = props => {
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
      <Part
        part={props.content[0].name}
        exercises={props.content[0].exercises}
      />
      <Part
        part={props.content[1].name}
        exercises={props.content[1].exercises}
      />
      <Part
        part={props.content[2].name}
        exercises={props.content[2].exercises}
      />
    </div>
  );
};

const Total = props => {
  let total = 0;
  props.items.forEach(item => {
    total += item.exercises;
  });

  return <p>Number of exercises {total}</p>;
};
ReactDOM.render(<App />, document.getElementById('root'));
