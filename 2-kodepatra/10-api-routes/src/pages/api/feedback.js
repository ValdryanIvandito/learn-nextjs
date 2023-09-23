import fs from "fs";
import path from "path";

function handler(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;
    const feedback = req.body.feedback;

    const newFeedback = {
      id: new Date().toISOString(),
      email: email,
      text: feedback,
    };

    // store data in local json file (as database)
    const filePath = path.join(process.cwd(), "data", "feedback.json");
    const readData = fs.readFileSync(filePath);
    const data = JSON.parse(readData);

    data.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res
      .status(200)
      .json({ message: "thanks for the feedback", feedback: newFeedback });
  } else {
    res.status(200).json({ message: "thanks for the feedback" });
  }
}

export default handler;
