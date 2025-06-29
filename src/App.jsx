import { useState } from "react";
import "./App.css";
import Button from "./componets/Button/Button";

function App() {
  return (
    <>
      <Button variant="primary"></Button>
      <Button variant="secondary"></Button>
      <Button variant="minimal"></Button>
      <Button variant=""></Button>
    </>
  );
}

export default App;
