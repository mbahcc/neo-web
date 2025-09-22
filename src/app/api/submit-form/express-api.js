require('dotenv').config({ path: '.env.local' });
const { error } = require('console');
const express = require('express');
const { MongoClient } = require("mongodb");
const { use } = require('react');
const uri = process.env.MONGO_DB_CONNECTION_STRING;
const client = new MongoClient(uri);
const app = express();
const port = 3000;


let database;
let userCollection;

async function connectDB(){
    try {
        await client.connect();
        database = client.db('input-form');
        userCollection = database.collection('results');
        console.log("Connected to MongoDB");

    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

connectDB();


app.use(express.json());

app.post('/api/submit-form', async(req, res) => {
    try{
        const { company, name, email, desc } = req.body;
        if(!company || !name || !email){
            return res.status(400).json({
                error: 'Company, Name, and Email are required fields.'
            });
    }
    const inputData = { company: company, name: name, email:email, message: desc, createdAt: new Date() };

    const result = await userCollection.insertOne(inputData);
    console.log(`New listing created with the following id: ${result.insertedId}`);
    console.log('Form Data Received:', inputData);
    res.status(201).json({ message: 'Form data received successfully', id: result.insertedId });
    } catch (error) {
        console.error('Error processing form data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

process.on('SIGINT', async () => {
  console.log('Closing MongoDB connection...');
  await client.close();
  process.exit(0);
});
