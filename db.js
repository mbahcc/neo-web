// Use this file to test MongoDB connection and insertion

require('dotenv').config({ path: '.env.local' });
const { MongoClient } = require("mongodb");
const { data } = require("motion/react-client");
const uri = process.env.MONGO_DB_CONNECTION_STRING;
const client = new MongoClient(uri);

async function run() {

  try {

    const database = client.db('input-form');
    const userCollection = database.collection('results');
    const inputData = {
      company: 'Test Company',
      name: "Chike",
      email: "test@gmail.com",
      message: "This is a test message"
    };

    const result = await userCollection.insertOne(inputData);
    console.log(`New listing created with the following id: ${result.insertedId}`);

  } finally {
    await client.close();
  }
}
run().catch(console.dir);