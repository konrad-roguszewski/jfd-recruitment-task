import { AiOutlineRight } from "react-icons/ai";
import { AiFillAndroid } from "react-icons/ai";
import { AiFillApple } from "react-icons/ai";
import styled from "styled-components";

const Root = styled.div`
  height: 224px;
  width: 1024px;
  background-color: #f9f9f9;
  display: flex;
  margin: 0 auto;
  margin-top: 32px;
`;

export const Footer = () => {
  return (
    <Root>
      <div>
        <h3>Running out of products?</h3>
        <p>Lorem ipsum dolor sit amet, consect turadipiscing elit. Integer aliquet.</p>
        <button>Buy now <AiOutlineRight /></button>
      </div>
      <div>
        <h3>Bod•ē Trainer in your pocket</h3>
        <p>Lorem ipsum dolor sit amet, consect turadipiscing elit. Integer aliquet.</p>
        <button><AiFillApple /> iOS <AiOutlineRight /></button>
        <button><AiFillAndroid /> Android <AiOutlineRight /></button>
      </div>
      <div>
        <h3>Frequently Asked Questions</h3>
        <p>Lorem ipsum dolor sit amet, consect turadipiscing elit. Integer aliquet.</p>
        <button>Read FAQs <AiOutlineRight /></button>
      </div>
    </Root>
  );
};
