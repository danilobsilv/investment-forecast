import mongoose from 'mongoose';
import * as dotenv from "dotenv";
dotenv.config({ path: __dirname+'/.env' });

const uri = "mongodb+srv://danilobsilv:kdqq4W1ZPKOo1HxV@test-cluster.kpwralm.mongodb.net/?retryWrites=true&w=majority&appName=test-cluster";
//const uri: string = process.env.CONN_STRING_TEST_CLUSTER
export async function db_conn() {

  const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
  try {

    mongoose.set("strictQuery", true);
    await mongoose.connect(uri);
    console.log("connected to Database");

  } catch (error) {
    console.error(`Error connecting to the database: ${error}`);
  }
}
