const { GoogleGenerativeAI } = require("@google/generative-ai");
const API_KEY = process.env.API_KEY;

const genAI = new GoogleGenerativeAI(API_KEY);

exports.ai = async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).send({ message: "Prompt is required" });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    const response = await result.response.text();

    res.status(200).send({ result: response });
  } catch (error) {
    console.error("Error generating daily challenges:", error);
    res.status(500).send({ message: "Error generating daily challenges" });
  }
};

exports.generateEmailTemplate = async (req, res) => {
  try {
    const { emailTemplate } = req.body;

    if (!emailTemplate) {
      return res.status(400).json({ error: "Email template is required" });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = `Return an email from this information allowing me to change portions such as my name, recipient, company, time, etc.: ${emailTemplate}. Don't respond with anything but the content, so no follow-ups or introductions as an AI.`;

    const result = await model.generateContent(prompt);
    const response = await result.response.text();

    res.status(200).json({ generatedEmail: response });
  } catch (error) {
    console.error("Error generating email template:", error);
    res.status(500).json({ error: "Failed to generate email template" });
  }
};
