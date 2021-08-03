import { AiOutlineRight } from 'react-icons/ai';
import { AiFillAndroid } from 'react-icons/ai';
import { AiFillApple } from 'react-icons/ai';
import styled from 'styled-components';

const Root = styled.div`
  height: 224px;
  background-color: ${props => props.theme.lightGray};
  display: flex;
  margin: 0 auto;
  margin-top: 32px;
  width: 96%;
  max-width: 1024px;
  padding: 0 2%;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: auto;
    margin-top: 16px;
  }
`;

const StyledHeading = styled.h3`
  color: ${props => props.theme.graphite};
  font-size: 24px;
  width: 220px;
  margin: 16px 0;
  @media screen and (max-width: 768px) {
    width: auto;
  }
`;

const StyledParagraph = styled.p`
  color: ${props => props.theme.graphite};
`;

const StyledButton = styled.button`
  color: ${props => props.theme.graphite};
  border: 1px solid ${props => props.theme.graphite};
  border-radius: 6px;
  background: ${props => props.theme.lightGray};
  font-size: 14px;
  display: flex;
  align-items: center;
  padding: 8px;
  font-size: 18px;
  margin-right: 10px;
  height: 36px;
  &:hover {
    color: ${props => props.theme.lightGray};
    border: 1px solid ${props => props.theme.graphite};
    background: ${props => props.theme.graphite};
  }
`;

const LastInfoPanel = styled.div`
  margin-right: 50px;
  @media screen and (max-width: 768px) {
    margin-bottom: 16px;
  }
`;

const InfoPanel = styled.div`
  margin-right: 50px;
  position: relative;
  z-index: 1;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 10%;
    height: 90%;
    width: 100%;
    border-right: 1px solid ${props => props.theme.darkGray};
    @media screen and (max-width: 768px) {
      border-right: 1px solid ${props => props.theme.lightGray};
    }
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 16px;
    position: relative;
    z-index: 1;
    &:after {
      content: '';
      position: absolute;
      top: 16px;
      right: 30%;
      bottom: 0%;
      height: 100%;
      width: 70%;
      border-bottom: 1px solid ${props => props.theme.darkGray};
    }
  }
`;

const BtnGroup = styled.div`
  display: flex;
`;

const StyledSpan = styled.span`
  margin: 0 5px;
`;

const StylediOSIcon = styled(AiFillApple)`
  height: 26px;
  width: 26px;
`;

const StyledAndroidIcon = styled(AiFillAndroid)`
  height: 26px;
  width: 26px;
`;

export const Footer = () => {
  return (
    <Root>
      <InfoPanel>
        <StyledHeading>Running out of products?</StyledHeading>
        <StyledParagraph>
          Lorem ipsum dolor sit amet, consect turadipiscing elit. Integer
          aliquet.
        </StyledParagraph>
        <StyledButton>
          <StyledSpan>Buy now</StyledSpan>
          <AiOutlineRight />
        </StyledButton>
      </InfoPanel>
      <InfoPanel>
        <StyledHeading>Bod•ē Trainer in your pocket</StyledHeading>
        <StyledParagraph>
          Lorem ipsum dolor sit amet, consect turadipiscing elit. Integer
          aliquet.
        </StyledParagraph>
        <BtnGroup>
          <StyledButton>
            <StylediOSIcon />
            <StyledSpan>iOS</StyledSpan>
            <AiOutlineRight />
          </StyledButton>
          <StyledButton>
            <StyledAndroidIcon />
            <StyledSpan>Android</StyledSpan>
            <AiOutlineRight />
          </StyledButton>
        </BtnGroup>
      </InfoPanel>
      <LastInfoPanel>
        <StyledHeading>Frequently Asked Questions</StyledHeading>
        <StyledParagraph>
          Lorem ipsum dolor sit amet, consect turadipiscing elit. Integer
          aliquet.
        </StyledParagraph>
        <StyledButton>
          <StyledSpan>Read FAQs</StyledSpan>
          <AiOutlineRight />
        </StyledButton>
      </LastInfoPanel>
    </Root>
  );
};
