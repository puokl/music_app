import React from "react";
import { render } from "react-dom";

export default function App() {
  return <div>Testing React Code</div>;
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
