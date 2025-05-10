import { handleFetch } from "./fetch";

const BACKEND_API_URL = "http://localhost:3000/api/emailFormat";

export const fetchAiResponse = async (emailTemplate) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ emailTemplate }),
  };

  const [data, error] = await handleFetch(BACKEND_API_URL, options);

  if (error) {
    console.error("Error fetching AI response:", error);
    return null;
  }

  return data.generatedEmail || null;
};
