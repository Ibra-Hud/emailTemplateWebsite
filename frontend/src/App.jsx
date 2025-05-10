import "./styles/App.css";
import { useState } from "react";
import { Header } from "./components/header";
import { Intro } from "./components/info";
import { ShowFormButton } from "./components/buttons";

// TODO: Add the gemini api so that it makes the template automatically
// TODO: Create a different file for each component

function App() {
  return (
    <>
      <Header />
      <Intro />
      <ShowFormButton />
    </>
  );
}

export default App;
