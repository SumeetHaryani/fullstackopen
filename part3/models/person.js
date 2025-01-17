const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

require('dotenv').config();
mongoose.set('useFindAndModify', false);

const url = process.env.MONGODB_URI;
console.log('connecting to', url);

mongoose
    .connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })
    .then((result) => {
        console.log('connected to MongoDB');
    })
    .catch((error) => {
        console.log('error connecting to MongoDB:', error.message);
    });

const personSchema = new mongoose.Schema({
    name: { type: String, unique: true },
    number: { type: String },
});
personSchema.plugin(uniqueValidator);

personSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    },
});

module.exports = mongoose.model('Person', personSchema);
