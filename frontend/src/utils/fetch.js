export const handleFetch = async (url, options = {}) => {
  try {
    const response = await fetch(url, options);
    const { ok, status, headers } = response;
    if (!ok)
      throw new Error(`Fetch failed with status - ${status}`, {
        cause: status,
      });

    const isJson = (headers.get("content-type") || "").includes(
      "application/json"
    );
    const responseData = await (isJson ? response.json() : response.text());

    return [responseData, null];
  } catch (error) {
    console.warn(error);
    return [null, error];
  }
};

export const buildPostOptions = (prompt) => ({
  method: "POST",
  credentials: "include",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ prompt }),
});

export const getTemplateOptions = (initEmail) => {
  const prompt = `Return an email from this information allowing me to change portions such as my name, recipient, company, time, etc.: ${initEmail}. Don't respond with anything but the content, so no follow-ups or introductions as an AI.`;

  return buildPostOptions(prompt);
};

// module.exports = handleFetch; // Default Export

const AI_API_URL = "http://localhost:3000/api/emailFormat"; // The URL for the AI API endpoint

export const fetchAiResponse = async (emailTemplate) => {
  // Use the handleFetch function to make the API call
  const [data, error] = await handleFetch(AI_API_URL);

  if (error) {
    console.error("Error fetching AI response:", error);
    return null;
  }

  console.log("AI response data:", data);
  return data.generatedEmail || data; // Return the generated email from the response
};
