import styled from 'styled-components';
import { AiOutlineLeft } from 'react-icons/ai';
import { AiOutlineRight } from 'react-icons/ai';
import { weeks } from '../data/weeks';

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
  &:disabled {
    color: ${props => props.theme.lightGray};
    border: 1px solid ${props => props.theme.lightGray};
  }
  &:hover {
    color: ${props => props.theme.lightGray};
    border: 1px solid ${props => props.theme.graphite};
    background: ${props => props.theme.graphite};
    &:disabled {
      color: ${props => props.theme.lightGray};
      background: ${props => props.theme.lightGray};
      border: 1px solid ${props => props.theme.lightGray};
    }
  }
`;

const StyledParagraph = styled.p`
  font-size: 36px;
  color: ${props => props.theme.orange};
  width: 250px;
  text-align: center;
  @media screen and (max-width: 768px) {
    margin-top: 26px;
  }
  @media screen and (max-width: 480px) {
    margin-top: 16px;
    margin-bottom: 26px;
  }
`;

interface ControlPanelProps {
  currentWeek: number;
  setCurrentWeek: any;
};

export const WeekSlider = ({
  currentWeek,
  setCurrentWeek
}: ControlPanelProps) => {
  function goToNextWeek() {
    setCurrentWeek((sequence: number) => sequence + 1);
  };

  function goToPreviousWeek() {
    setCurrentWeek((sequence: number) => sequence - 1);
  };

  return (
    <Root>
      <StyledButton onClick={goToPreviousWeek} disabled={currentWeek === 1}>
        <AiOutlineLeft />
      </StyledButton>
      <StyledParagraph>{weeks[currentWeek - 1].name}</StyledParagraph>
      <StyledButton
        onClick={goToNextWeek}
        disabled={currentWeek === 12 && true}
      >
        <AiOutlineRight />
      </StyledButton>
    </Root>
  );
};
