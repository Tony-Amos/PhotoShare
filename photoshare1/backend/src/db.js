import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.COSMOS_URI);

export default async function connectDB() {
  await client.connect();
  global.db = client.db("photoshare");
  console.log("Connected to Cosmos DB");
}