import { getSession } from "next-auth/react";

//DB Connection 

import { MongoClient } from 'mongodb';

const uri = process.env.DB_URI;
const dbName = 'caro';

let cachedClient = null;

export async function connectToDatabase() {
  if (cachedClient && cachedClient.isConnected) {
    return cachedClient;
  }

  const client = new MongoClient(uri, {
    serverApi: {
      version: '1',
      strict: true,
      deprecationErrors: true,
    },
  });

  try {
    await client.connect();
    await client.db('admin').command({ ping: 1 });
    console.log('Pinged your deployment. You successfully connected to MongoDB!');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }

  cachedClient = client;
  return client;
}

//Retrieve Data

export async function getServerSideProps(context){
    const session = await getSession(context);
    const client = await connectToDatabase();
  const db = client.db('caro');

  // Retrieve data from the database
  const data = await db.collection('clothing').find({}).toArray();

  const products = data.map((item) => {
    return {
      ...item,
      _id: item._id.toString(),
      productID: parseInt(item.productID),
    };
  });

  return {
    props: {
      products,
      session,
    },
  };
}
   
    
  
export default getServerSideProps;