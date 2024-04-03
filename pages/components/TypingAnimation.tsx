import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.5);
  }
`;

const Card = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 800px;
  margin: 20px auto;
  overflow: hidden;
`;

const TypingText = styled.pre`
  font-size: 1rem;
  color: #61dafb;
  font-family: "Courier New", monospace;
  text-align: left;
  white-space: pre-wrap;
  word-wrap: break-word;
  margin: 0;
  overflow: hidden;
`;

const Cursor = styled.span`
  display: inline-block;
  margin-left: 5px;
  height: 10px;
  width: 10px;
  background-color: #61dafb;
  border-radius: 50%;
  animation: ${pulse} 1s infinite;
  transform-origin: center;
`;

const TypingAnimation = () => {
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  const sentence = `import React from 'react';\n\nfunction App() { return (\n    <div> Hello World\n </div>\n  ); }\n\nexport default App;`;

  useEffect(() => {
    if (subIndex === sentence.length + 1 && !reverse) {
      setReverse(true);
      setTimeout(() => {}, 2000); // Yazı tamamlandıktan sonra bekletme
    } else if (subIndex === 0 && reverse) {
      setReverse(false);
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((currentSubIndex) =>
          reverse ? currentSubIndex - 1 : currentSubIndex + 1,
        );
      },
      reverse ? 50 : 100,
    ); // Silme hızını artır

    return () => clearTimeout(timeout);
  }, [subIndex, reverse, sentence]);

  return (
    <Card>
      <TypingText>
        {sentence.substring(0, subIndex)}
        <Cursor />
      </TypingText>
    </Card>
  );
};

export default TypingAnimation;
