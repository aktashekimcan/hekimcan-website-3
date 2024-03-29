import React from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import { AiOutlineMail, AiFillEnvironment } from "react-icons/ai";
import { FaMobileAlt } from "react-icons/fa";
import Head from "next/head"; // next/head import ediliyor

const rgbAnimation = keyframes`
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
`;
const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
`;

const IconCircle = styled.div`
  background-color: #333;
  border-radius: 50%;
  padding: 15px; // Padding boyutunu azalttım
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute; // Pozisyonunu absolute olarak değiştirdim
  top: -30px; // Üstte ortalanmış olarak yerleştirmek için
  left: 50%;
  transform: translateX(
    -50%
  ); // Sol tarafından %50 kaydırarak tam ortaya alıyorum
  z-index: 2; // InfoCard üzerinde gözükmesi için z-index'i artırdım
  /* Add position relative to use pseudo-elements */

  &::before {
    content: "";
    position: absolute;
    top: -10px;
    right: -10px;
    bottom: -10px;
    left: -10px;
    z-index: -1;
    background: linear-gradient(90deg, cyan, magenta, yellow, cyan);
    background-size: 400% 400%;
    border-radius: 50%; /* Make it circular */
    animation: ${rgbAnimation} 4s linear infinite;
  }
`;

const InfoCard = styled.div`
  background-color: #222;
  color: white;
  padding: 60px 20px 20px; // Üstteki boşluğu azaltmak için padding'i azalttım
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  position: relative; // Relative pozisyon ekledim
  text-align: center;
  transition: transform 0.3s ease-in-out;
  margin-top: 30px; // Üstteki IconCircle için boşluk bıraktım

  &:hover {
    transform: translateY(-10px);
    background-color: #333;
  }
`;

const CardTitle = styled.h3`
  color: white;
  margin: 10px 0;
`;

const CardText = styled.p`
  color: white;
  margin: 0;
  font-size: 1em;
`;
const GlobalStyle = createGlobalStyle`
  body {
    background-color: #121212;
    color: white;
    font-family: 'Arial', sans-serif;
    margin: 0; // Varsayılan margin sıfırlanıyor
    padding: 0; // Varsayılan padding sıfırlanıyor
    box-sizing: border-box; // Kutu modeli ayarı
  }
`;

const FormContainer = styled.div`
  background-color: #333;
  color: white;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  max-width: 500px;
  margin: 40px auto;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: -10px;
    right: -10px;
    bottom: -10px;
    left: -10px;
    z-index: -1;
    background: linear-gradient(90deg, cyan, magenta, yellow, cyan);
    background-size: 400% 400%;
    border-radius: 20px;
    animation: ${rgbAnimation} 4s linear infinite;
  }

  @media (max-width: 576px) {
    // Küçük ekranlar ve mobil cihazlar için
    padding: 20px; // Daha az padding
    max-width: 300px; // Daha küçük genişlik
  }
`;

const StyledInput = styled.input`
  background-color: #333; // Arka plan rengi FormContainer ile uyumlu hale getirildi
  color: white;
  border: 1px solid #444;
  margin-bottom: 15px;
  padding: 15px;
  border-radius: 5px;
  width: calc(100% - 30px);
  box-sizing: border-box;
  &:focus {
    background-color: #111; // Odaklandığında arka plan rengi
    outline: none;
    color: #fff;
  }
`;

const StyledTextArea = styled.textarea`
  background-color: #222;
  color: white;
  border: 1px solid #444;
  margin-bottom: 15px;
  padding: 15px;
  border-radius: 5px;
  resize: none;
  width: calc(100% - 30px);
  box-sizing: border-box;
  &:focus {
    background-color: #111;
    outline: none;
  }
`;

const StyledButton = styled.button`
  background-color: #555;
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #777;
  }
`;

const ContactForm: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <FormContainer id="contact">
        <h1>Bana Ulaş</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              İsim*
            </label>
            <StyledInput
              type="text"
              id="name"
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              E-Posta*
            </label>
            <StyledInput
              type="email"
              id="email"
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Telefon
            </label>
            <StyledInput type="tel" id="phone" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Mesaj
            </label>
            <StyledTextArea id="message" className="form-control" rows={3} />
          </div>
          <StyledButton type="submit" className="btn">
            GÖNDER
          </StyledButton>
        </form>
      </FormContainer>
      <CardContainer>
        <InfoCard>
          <IconCircle>
            <AiOutlineMail size="2em" color="#121212" />
          </IconCircle>
          <CardTitle>E-Posta</CardTitle>

          <CardText>hekimcanaktas@gmail.com</CardText>
        </InfoCard>
        <InfoCard>
          <IconCircle>
            <FaMobileAlt size="2em" color="#121212" /> {/* Updated Icon */}
          </IconCircle>
          <CardTitle>Telefon</CardTitle>
          <CardText>+90 531 905 02 75</CardText>
        </InfoCard>
        <InfoCard>
          <IconCircle>
            <AiFillEnvironment size="2em" color="#121212" />
          </IconCircle>
          <CardTitle>Adres</CardTitle>
          <CardText>İzmir, Türkiye</CardText>
        </InfoCard>
      </CardContainer>
    </>
  );
};

export default ContactForm;
