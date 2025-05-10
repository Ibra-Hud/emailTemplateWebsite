// Email skeleton can be entered and then filled in based off of the parameters
// Can save different email templates
import { useState } from "react";
import Markdown from "https://esm.sh/react-markdown@10";
import { fetchAiResponse } from "../utils/fetchAiResponse";

export const Form = () => {
  const [generatedEmail, setGeneratedEmail] = useState("");
  const [subject, setSubject] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formObject = Object.fromEntries(formData);
    const { subject, emailTemplate } = formObject;

    const response = await fetchAiResponse(emailTemplate);

    setSubject(subject);
    setGeneratedEmail(response);

    event.target.reset();
  };

  return (
    <div id="form-container">
      <form id="template-form" onSubmit={handleSubmit}>
        <h3>Email Template Form</h3>
        <div id="input-group">
          <label htmlFor="subject">Subject: </label>
          <input name="subject" id="subject" type="text" required />
          <label htmlFor="emailTemplate">Email Body: </label>
          <textarea name="emailTemplate" id="emailTemplate"></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>

      {generatedEmail && (
        <div>
          <h4>{subject}</h4>
          <Markdown>{generatedEmail}</Markdown>
        </div>
      )}
    </div>
  );
};
