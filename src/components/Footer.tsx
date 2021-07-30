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
`;

const StyledHeading = styled.h3`
  color: ${props => props.theme.graphite};
  font-size: 24px;
  width: 220px;
  margin: 16px 0;
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
`;

const InfoPanel = styled.div``;

const CenterInfoPanel = styled.div`
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
      <CenterInfoPanel>
        <StyledHeading>Running out of products?</StyledHeading>
        <StyledParagraph>
          Lorem ipsum dolor sit amet, consect turadipiscing elit. Integer
          aliquet.
        </StyledParagraph>
        <StyledButton>
          <StyledSpan>Buy now</StyledSpan>
          <AiOutlineRight />
        </StyledButton>
      </CenterInfoPanel>
      <CenterInfoPanel>
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
      </CenterInfoPanel>
      <InfoPanel>
        <StyledHeading>Frequently Asked Questions</StyledHeading>
        <StyledParagraph>
          Lorem ipsum dolor sit amet, consect turadipiscing elit. Integer
          aliquet.
        </StyledParagraph>
        <StyledButton>
          <StyledSpan>Read FAQs</StyledSpan>
          <AiOutlineRight />
        </StyledButton>
      </InfoPanel>
    </Root>
  );
};
