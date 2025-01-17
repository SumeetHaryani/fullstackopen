const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const Person = require('./models/person');
require('dotenv').config();

app.use(cors());
app.use(express.static('build'));
app.use(express.json());

app.use(
    morgan(':method :url :status :res[content-length] - :response-time ms :body')
);

morgan.token('body', (req) => JSON.stringify(req.body));

app.get('/api/persons', (req, res) => {
    Person.find({}).then((persons) => {
        res.json(persons.map((person) => person.toJSON()));
    });
});

app.get('/api/persons/:id', (req, res, next) => {
    Person.findById(req.params.id)
        .then((person) => {
            if (person) {
                res.json(person.toJSON());
            } else {
                res.status(404).end();
            }
        })
        .catch((error) => next(error));
});

app.get('/info', (req, res) => {
    const date = new Date();
    Person.find({}).then((persons) => {
        res.send(
            `<p>Phonebook has info for ${persons.length} people <br/> ${date} </p>`
        );
    });
});

app.post('/api/persons', (req, res, next) => {
    const body = req.body;
    console.log('body', body);

    if (!body.name || !body.number) {
        return res.status(400).json({
            error: ' name or number is missing',
        });
    }

    const person = new Person({
        name: body.name,
        number: body.number,
    });
    person
        .save()
        .then((savedPerson) => {
            res.json(savedPerson.toJSON());
        })
        .catch((error) => next(error));
});

app.put('/api/persons/:id', (request, response, next) => {
    const { body } = request;

    const person = {
        name: body.name,
        number: body.number,
    };

    Person.findByIdAndUpdate(request.params.id, person, { new: true })
        .then((updatedPerson) => {
            response.json(updatedPerson.toJSON());
        })
        .catch((error) => next(error));
});

app.delete('/api/persons/:id', (req, res,next) => {
    Person.findByIdAndRemove(req.params.id)
        .then((result) => {
            res.status(204).end();
        })
        .catch((error) => next(error));
});

const unknownEndpoint = (request, response) => {
    response.status(404).send({
        error: 'unknown endpoint',
    });
};

app.use(unknownEndpoint);

const errorHandler = (error, request, response, next) => {
    console.error(error.message);
    if (error.name === 'CastError' && error.kind === 'ObjectId') {
        return response.status(400).send({ error: 'malformatted id' });
    } else if (error.name === 'ValidationError') {
        return response.status(400).json({ error: error.message });
    }

    next(error);
};
app.use(errorHandler);

const { PORT } = process.env;
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
