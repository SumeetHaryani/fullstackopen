const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(express.json());
app.use(
  morgan(':method :url :status :res[content-length] - :response-time ms :body')
);

morgan.token('body', (req, res) => {
  return JSON.stringify(req.body);
});
let persons = [
  {
    name: 'Arto Hellas',
    number: '3434343',
    id: 1,
  },
  {
    name: 'Ada Lovelace',
    number: '39-44-5323523',
    id: 2,
  },
  {
    name: 'Dan Abramov',
    number: '12-43-234345',
    id: 3,
  },
  {
    name: 'Mary Poppendieck',
    number: '39-23-6423122',
    id: 4,
  },
];
app.get('/api/persons', (req, res) => {
  res.json(persons);
});

app.get('/api/persons/:id', (req, res) => {
  // console.log('id');
  const id = Number(req.params.id);
  const person = persons.find((p) => p.id === id);
  console.log('person', person);
  if (person) {
    res.json(person);
  } else {
    res.status(404).end;
  }
});

app.get('/info', (req, res) => {
  const len = persons.length;
  const date = new Date();
  res.send(`<p>Phonebook has info for ${len} peopele <br/> ${date} </p>`);
});

const getRandomId = (max = 1000) => Math.floor(Math.random() * Math.floor(max));
const checkUniqueName = (name) => persons.find((person) => person.name == name);
app.post('/api/persons', (req, res) => {
  const  body  = req.body;
  console.log('body', body);

  if (!body.name || !body.number) {
    return res.status(400).json({
      error: ' name or number is missing',
    });
  }
  if (checkUniqueName(body.name)) {
    return res.status(400).json({
      error: 'name must be unique',
    });
  }

  const person = {
    name: body.name,
    number: body.number,
    id: getRandomId(),
  };
  persons = persons.concat(person);
  res.json(person);
});

app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id);
  persons = persons.filter((person) => person.id !== id);
  res.status(204).end();
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
