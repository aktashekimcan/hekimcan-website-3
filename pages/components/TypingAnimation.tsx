// components/TypingAnimation.tsx
import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const blink = keyframes`
  50% { opacity: 0; }
`;

const TypingText = styled.span`
  font-size: 1.5rem;
  color: #61dafb; // You can set a default color here
  font-family: "Courier New", monospace;
`;

const Cursor = styled.span`
  font-size: 1.125rem;
  color: #61dafb; // Same color as TypingText for consistency
  animation: ${blink} 1s step-end infinite;
  font-family: "Courier New", monospace;
`;

const TypingAnimation = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const sentences = [
    "HEKİM AKTAŞ",
    "Yazılım Mühendisliği Öğrencisi",
    "Mühendis Adayı",
    "Bilgisayar Programı Geliştiricisi",
    "Yazılım Geliştiricisi",
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (subIndex === sentences[index].length + 1 && !reverse) {
        setReverse(true);
        setTimeout(() => {}, 2000); // Wait after the text is complete
      } else if (subIndex === 0 && reverse) {
        setReverse(false);
        setIndex((index + 1) % sentences.length);
      }

      if (reverse && subIndex > 0) {
        setSubIndex(subIndex - 1); // Backward erase
      } else if (!reverse && subIndex <= sentences[index].length) {
        setSubIndex(subIndex + 1); // Forward typing
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, sentences]);

  return (
    <div>
      <TypingText>{sentences[index].substring(0, subIndex)}</TypingText>
      <Cursor>|</Cursor>
    </div>
  );
};

export default TypingAnimation;
