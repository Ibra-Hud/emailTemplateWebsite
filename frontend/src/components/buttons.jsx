import { useState } from "react";
import { Form } from "./form";

export const ShowFormButton = () => {
  // This needs to signify separation of components vs separation of concerns
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <button onClick={handleClick}>Create a Template</button>
      {showForm && <Form />}
    </>
  );
};
