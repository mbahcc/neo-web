
import { MongoClient } from 'mongodb';

if (!process.env.MONGO_DB_CONNECTION_STRING) {
    throw new Error('Invalid/Missing environment variable: "MONGO_DB_CONNECTION_STRING"');
}

const uri = process.env.MONGO_DB_CONNECTION_STRING;
const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
    const globalWithMongo = global as typeof globalThis & {
        _mongoClientPromise?: Promise<MongoClient>;
    };

    if (!globalWithMongo._mongoClientPromise) {
        client = new MongoClient(uri, options);
        globalWithMongo._mongoClientPromise = client.connect();
    }
    clientPromise = globalWithMongo._mongoClientPromise;
} else {
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
}

export default clientPromise;
