import { hashPassword } from "../../../lib/auth";
import { connectToDatabase } from "../../../lib/db";

async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }

  const data = req.body;
  const { email, password } = data;

  if (
    !email ||
    !email.includes("@") ||
    !password ||
    password.trim().length < 7
  ) {
    res.status(422).json({
      message: "Invalid input - password should also be at least 7 characters",
    });
    console.log("Invalid input - password should also be at least 7 characters");
    return;
  }

  const client = await connectToDatabase();
  const db = client.db();
  const existingUser = await db
    .collection("user_credential")
    .findOne({ email: email });
  if (existingUser) {
    res.status(422).json({ message: "User exists already!" });
    console.log("User exists already!")
    client.close();
    return;
  }
  const hashedPassword = await hashPassword(password);

  const result = await db.collection("user_credential").insertOne({
    email: email,
    password: hashedPassword,
  });

  res.status(201).json({ message: "Created user!" });
  console.log("Created user!")
}

export default handler;
