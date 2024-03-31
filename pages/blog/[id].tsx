import React from "react";
import { blogs } from "./data";
import { useRouter } from "next/router";
import styled, { createGlobalStyle } from "styled-components";
import dynamic from "next/dynamic"; // Dinamik içe aktarma için dynamic'i import edin
// Other imports remain unchanged
import { PrismAsyncLight } from "react-syntax-highlighter"; // This import might be incorrect based on the latest change attempt
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";

// Defining SyntaxHighlighterWrapperProps interface
interface SyntaxHighlighterWrapperProps {
  code: string;
  language: string;
}

// Correcting DynamicPrismAsyncLight definition if necessary
const DynamicPrismAsyncLight = dynamic(
  () => import("react-syntax-highlighter/dist/esm/prism-async-light"),
  {
    ssr: false,
  },
);

const SyntaxHighlighterWrapper: React.FC<SyntaxHighlighterWrapperProps> = ({
  code,
  language,
}) => {
  // Children olarak kod bloğunu geçir
  return (
    <DynamicPrismAsyncLight language={language} style={darcula}>
      {code}
    </DynamicPrismAsyncLight>
  );
};


const GlobalStyle = createGlobalStyle`
  body {
    background-color: #121212;
    color: #ffffff;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center; // İçeriği sayfa ortasında hizala
`;

const Card = styled.div`
  background-color: #1e1e1e;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
  padding: 20px;
  width: 80%; // Kartın genişliğini sınırla
  max-width: 800px; // Maksimum genişlik sınırlaması
`;

const Title = styled.h1`
  color: #ffffff;
`;

const DateText = styled.p`
  color: #bbbbbb;
`;

const ContentWrapper = styled.div`
  white-space: pre-wrap;
  color: #dddddd;
`;
const CodeBlock = styled.pre`
  background-color: #2d2d2d;
  color: #f8f8f2;
  padding: 15px;
  border-radius: 4px;
  overflow-x: auto;
`;

const InlineCode = styled.code`
  background-color: #2d2d2d;
  color: #f8f8f2;
  padding: 2px 4px;
  border-radius: 4px;
`;

const Image = styled.img`
  max-width: 60%; // Resimlerin genişliğini küçült
  border-radius: 8px;
  margin: 20px auto; // Resimleri üstten ve alttan 20px boşlukla ve ortada hizala
  display: block; // Block seviyesinde bir element olarak ayarla
`;
const images = [
  "https://img.freepik.com/free-vector/react-native-mobile-app-abstract-concept-illustration-cross-platform-native-mobile-app-development-framework-javascript-library-user-interface-operating-system_335657-3350.jpg?t=st=1711872673~exp=1711876273~hmac=17ede8c22d57623d153c9455c9f2c93b3f2e5a816dd4754712636bb876176a76&w=740",
  "https://img.freepik.com/free-vector/desktop-smartphone-app-development_23-2148683810.jpg?t=st=1711872714~exp=1711876314~hmac=33c2caeb443e94363f795ff2ca5f877b17e7b000425eec0711379cac1d115e16&w=740",
  "https://img.freepik.com/free-vector/programmers-using-javascript-programming-language-computer-tiny-people-javascript-language-javascript-engine-js-web-development-concept-bright-vibrant-violet-isolated-illustration_335657-986.jpg?t=st=1711873138~exp=1711876738~hmac=f0fa7c8f078609aaf052211f39fa77681c42f3a070adb96777374bf6f810dd0e&w=996",
];
const BlogDetay = () => {
  const router = useRouter();
  const { id } = router.query;

  if (typeof id === "undefined") {
    return <div>Yükleniyor...</div>; // veya bir yükleme spinner'ı
  }

  const blog = blogs.find((blog) => blog.id.toString() === id);

  if (!blog) {
    return (
      <>
        <GlobalStyle />
        <Container>
          <p>Blog bulunamadı!</p>
        </Container>
      </>
    );
  }

  let contentSections = [];
  let paragraphCount = 0;
  let containsCodeBlock = false; // Flag to track presence of code blocks

  blog.content.split("```").forEach((section, index) => {
    // Odd indices are code blocks
    if (index % 2 === 1) {
      containsCodeBlock = true;
      contentSections.push(
        <SyntaxHighlighterWrapper
          language="javascript"
          style={darcula}
          code={section.trim()} // Pass code as a prop
          key={`code-${index}`}
        />,
      );
    } else {
      section.split("\n\n").forEach((paragraph, idx) => {
        contentSections.push(
          <p key={`paragraph-${index}-${idx}`}>{paragraph}</p>,
        );
        paragraphCount++;
      });
    }
  });

  // If the blog does not contain any code blocks, insert images after every five paragraphs
  if (!containsCodeBlock) {
    contentSections = contentSections.reduce((acc, section, index) => {
      acc.push(section);

      if (index % 5 === 4 && images[Math.floor(index / 5)]) {
        acc.push(
          <Image
            key={`image-${Math.floor(index / 5)}`}
            src={images[Math.floor(index / 5)]}
            alt={`Illustration ${Math.floor(index / 5) + 1}`}
          />,
        );
      }

      return acc;
    }, []);
  }

  return (
    <>
      <GlobalStyle />
      <Container>
        <Card>
          <Title>{blog.title}</Title>
          <DateText>{blog.date}</DateText>
          <ContentWrapper>{contentSections}</ContentWrapper>
        </Card>
      </Container>
    </>
  );
};

export default BlogDetay;
