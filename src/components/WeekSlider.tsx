import styled from 'styled-components';
import { AiOutlineLeft } from 'react-icons/ai';
import { AiOutlineRight } from 'react-icons/ai';

const Root = styled.div`
  display: flex;
  align-items: center;
`;

const StyledButton = styled.button`
  color: ${props => props.theme.graphite};
  border: 1px solid ${props => props.theme.graphite};
  border-radius: 6px;
  background: ${props => props.theme.lightGray};
  display: flex;
  align-items: center;
  padding: 0 2px;
  font-size: 18px;
  height: 42px;
`;

const StyledParagraph = styled.p`
  font-size: 36px;
  color: ${props => props.theme.orange};
  width: 250px;
  text-align: center;
`;

export const WeekSlider = () => {
  return (
    <Root>
      <StyledButton>
        <AiOutlineLeft />
      </StyledButton>
      <StyledParagraph>Week 7</StyledParagraph>
      <StyledButton>
        <AiOutlineRight />
      </StyledButton>
    </Root>
  );
};
