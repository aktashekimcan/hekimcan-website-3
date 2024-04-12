import React, { useState, useEffect, useRef } from "react";
import styled, { createGlobalStyle } from "styled-components";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-typescript";
import "ace-builds/src-noconflict/mode-python";

const Dots = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 4px 8px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
`;

const Dot = styled.span`
  height: 12px;
  width: 12px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  margin: 0 4px;
`;

const GlobalStyle = createGlobalStyle`
  .ace_editor {
    height: 100% !important;
    width: 100% !important;
    border-radius: 15px;
    background: transparent;
  }
  .ace_cursor {
    color: white !important;
    animation: blink 1s step-end infinite;
  }
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
`;

const Card = styled.div`
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  max-width: 800px;
  height: 40vw;
  max-height: 400px;
  margin: 2vw auto;
  overflow: hidden;
  background: #272822;

  @media (max-width: 600px) {
    padding: 10px;
    height: 60vw;
    margin: 5vw auto;
  }
`;

const codeSamples = [
  {
    language: "JavaScript",
    mode: "javascript",
    code: `// JavaScript sample\ndocument.addEventListener('DOMContentLoaded', function() {\n  console.log('Hello World');\n});`,
  },
  {
    language: "TypeScript",
    mode: "typescript",
    code: `// Angular Component sample\nimport { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {\n  title = 'Angular App';\n}`,
  },
  {
    language: "React",
    mode: "javascript",
    code: `// React Component sample\nimport React from 'react';\n\nfunction App() {\n  return (\n    <div>\n      <h1>Hello World</h1>\n    </div>\n  );\n}\n\nexport default App;`,
  },
  {
    language: "Python",
    mode: "python",
    code: `# Python sample\ndef greet(name: str) -> None:\n    print(f"Hello, {name}!")\n\ngreet('World')`,
  },
  {
    language: "Node.js",
    mode: "javascript",
    code: `// Node.js sample\nconst http = require('http');\n\nhttp.createServer((req, res) => {\n  res.writeHead(200, {'Content-Type': 'text/plain'});\n  res.end('Hello World\\n');\n}).listen(3000, 'localhost');\nconsole.log('Server running at http://localhost:3000/');`,
  },
  {
    language: "Simple TypeScript",
    mode: "typescript",
    code: `// Simple TypeScript example\nlet message: string = 'Hello, TypeScript!';\nconsole.log(message);`,
  },
  {
    language: "Next.js",
    mode: "javascript",
    code: `// Next.js Component sample\nimport { NextPage } from 'next';\n\nconst HomePage: NextPage = () => {\n  return (\n    <div>\n      <h1>Welcome to Next.js!</h1>\n    </div>\n  );\n};\n\nexport default HomePage;`,
  },
];

const TypingAnimation = () => {
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [sampleIndex, setSampleIndex] = useState(0);
  const editorRef = useRef(null);
  const currentSample = codeSamples[sampleIndex];

  useEffect(() => {
    if (subIndex === currentSample.code.length + 1 && !reverse) {
      setReverse(true); // Start reversing to erase text quickly
    } else if (subIndex === 0 && reverse) {
      setReverse(false);
      setSubIndex(0); // Reset subIndex to start new sample
      setSampleIndex((sampleIndex + 1) % codeSamples.length); // Move to the next sample or loop back
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((currentSubIndex) =>
          reverse ? currentSubIndex - 1 : currentSubIndex + 1,
        );
      },
      reverse ? 20 : 100,
    ); // Faster erasing speed

    return () => clearTimeout(timeout);
  }, [subIndex, reverse, sampleIndex, currentSample.code.length]);

  useEffect(() => {
    if (editorRef.current) {
      const currentText = currentSample.code.substring(0, subIndex);
      const rows = currentText.split("\n");
      const currentRow = rows.length;
      const currentColumn = rows[currentRow - 1].length; // Corrected this line
      editorRef.current.editor.gotoLine(currentRow, currentColumn, true);
    }
  }, [subIndex, currentSample]);

  return (
    <Card>
      <GlobalStyle />
      <Dots>
        <Dot color="#ff605c" />
        <Dot color="#ffbd44" />
        <Dot color="#00ca4e" />
      </Dots>
      <AceEditor
        mode={currentSample.mode}
        theme="monokai"
        name="UNIQUE_ID_OF_DIV"
        ref={editorRef}
        editorProps={{ $blockScrolling: true }}
        fontSize={16}
        showGutter={true}
        highlightActiveLine={false}
        value={currentSample.code.substring(0, subIndex)}
        setOptions={{
          showLineNumbers: true,
          tabSize: 2,
          readOnly: true,
           wrap: true 
        }}
      />
    </Card>
  );
};

export default TypingAnimation;
