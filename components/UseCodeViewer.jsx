import React from "react";
import CodeViewer from "./CodeViewer";

const sampleCode = `
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}
`;

function UseCodeViewer(props) {
  return (
    <div>
      <CodeViewer  code={props.code} language="javascript" title="JavaScript"/>
    </div>
  );
}

export default UseCodeViewer;
