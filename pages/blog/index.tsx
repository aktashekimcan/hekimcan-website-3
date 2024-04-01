import { blogs } from "../../public/data";
import Link from "next/link";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #121212;
    color: #ffffff;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
  }
`;

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Card = styled.div`
  display: flex;
  background-color: #333;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
  padding: 20px;
  color: #fff;
  align-items: center;
  max-width: 600px;
  width: 100%;
`;

const Thumbnail = styled.img`
  width: 100px;
  height: auto;
  border-radius: 4px;
  margin-right: 20px;
`;

const TextContent = styled.div`
  flex: 1;
`;

const StyledLink = styled.a`
  display: inline-block;
  background-color: #007bff;
  color: #fff;
  padding: 10px 15px;
  border-radius: 5px;
  text-decoration: none;
  margin-top: 10px;
  &:hover {
    background-color: #0056b3;
  }
`;

const DateText = styled.p`
  color: #bbbbbb;
`;

const Title = styled.h1`
  color: #ffffff;
  margin-bottom: 20px; /* Adjusted margin for visual balance */
  padding-bottom: 8px; /* Padding under the text for spacing the border */
  border-bottom: 2px solid #61dafb; /* Stylish border bottom */
  width: fit-content; /* Adjust width to content size */
  box-sizing: border-box; /* Include padding and border in element's total width */
`;

const BlogListesi = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>Blog Yazılarım</Title> {/* Styled Title with bottom border */}
        {blogs.map((blog) => (
          <Card key={blog.id}>
            <Thumbnail src={blog.thumbnail} alt="Blog Thumbnail" />
            <TextContent>
              <h5>{blog.title}</h5>
              <p>{blog.summary}</p>
              <DateText>{blog.date}</DateText>

              <Link href={`/blog/${blog.id}`} passHref>
                <StyledLink>Devamını Oku</StyledLink>
              </Link>
            </TextContent>
          </Card>
        ))}
      </Container>
    </>
  );
};

export default BlogListesi;
