const {getConnectedClient} = require('../database');

//Allows us to work with the same collection in queries
const getCollection = () => {
    const client = getConnectedClient();
    const collection = client.db('todosdb').collection('todos')
    return collection;
}

module.exports = {getCollection};