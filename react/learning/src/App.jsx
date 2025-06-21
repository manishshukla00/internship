import React from "react";

const App = () => {
  const changeText = () => {
    document.querySelector("h1").textContent = "New Heading";
  };
  return (
    <>
      <h1>Heading</h1>
      <p>Paragraph</p>
      <button onClick={changeText}>Click Me</button>
    </>
  );
};

export default App;
