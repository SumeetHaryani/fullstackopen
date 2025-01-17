const mongoose = require('mongoose');

if (process.argv.length < 3) {
    console.log('give password as argument');
    process.exit(1);
}

const password = process.argv[2];
const name = process.argv[3];
const number = process.argv[4];

const url = `mongodb+srv://coder_sam:${password}@cluster1-wkgus.mongodb.net/test?retryWrites=true&w=majority`;

mongoose.connect(url, {
    useNewUrlParser: true,useUnifiedTopology: true
});

const personSchema = new mongoose.Schema({
    name: String,
    number: String,
});

const Person = mongoose.model('Person', personSchema);

const person = new Person({
    name,
    number,
});

if (name && number) {
    person.save().then((result) => {
        console.log(`added ${name} number ${number} to phonebook`);
        mongoose.connection.close();
    });
} else {
    Person.find({}).then((result) => {
        result.forEach((person) => {
            console.log(`${person.name} ${person.number}`);
        });
        mongoose.connection.close();
    });
}
