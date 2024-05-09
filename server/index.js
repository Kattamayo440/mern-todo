require('dotenv').config();
const express = require('express');
const { connectToMongoDB } = require('./database');
const path = require('path');


const app = express();

//Allows JSON from request body
app.use(express.json());

app.use(express.static(path.join(__dirname, 'build')));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'build/index.html'));
});

//imports todo routes
const router = require('./routes')
app.use('/api', router);



const port = process.env.PORT || 3000;

const startServer = async () => {
    await connectToMongoDB();
    app.listen(port, () => {
        console.log(`Server started on port ${port}`);
    });
};
startServer();