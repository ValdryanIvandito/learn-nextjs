import { MongoClient } from "mongodb";

const username = "admin";
const password = "WK2ojvusGY4GOB3y";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    `mongodb+srv://${username}:${password}@cluster0.rxwsbnm.mongodb.net/learn_nextjs?retryWrites=true&w=majority`
  );

  return client;
}

// export default connectToDatabase;
