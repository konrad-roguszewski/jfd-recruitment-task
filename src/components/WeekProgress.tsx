import styled from 'styled-components';
import { GiPlainCircle } from 'react-icons/gi';
import { GiCircle } from 'react-icons/gi';
import { userSchedule } from '../data/userSchedule';

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledTitle = styled.p`
  text-transform: uppercase;
  font-size: 10px;
  color: ${props => props.theme.graphite};
  margin-left: 0px;
  @media screen and (max-width: 768px) {
    text-align: center;
    margin-top: 36px;
  }
  @media screen and (max-width: 480px) {
    font-size: 0.7rem;
  }
`;

const StyledParagraph = styled.p`
  text-transform: uppercase;
  font-size: 10px;
  color: ${props => props.theme.graphite};
  text-align: center;
`;

const ProgressBar = styled.div`
  display: flex;
`;

const ProgressSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 10px;
  position: relative;
  z-index: 1;
  width: 12px;
  &:first-child {
    margin-left: 0px;
    &:after {
      content: '';
      position: absolute;
      left: 10px;
      bottom: 86%;
      width: 14px;
      border-bottom: 2px solid ${props => props.theme.lightGray};
    }
  }
  &:after {
    content: '';
    position: absolute;
    right: 9.6px;
    bottom: 86%;
    width: 14px;
    border-bottom: 2px solid ${props => props.theme.darkGray};
  }
  &.active {
    &:after {
      content: '';
      position: absolute;
      right: 10px;
      bottom: 86%;
      width: 14px;
      border-bottom: 2px solid ${props => props.theme.green};
    }
  }
  &:last-child {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 10px;
  }
`;

const PlainCircleIcon = styled(GiPlainCircle)`
  height: 10px;
  width: 10px;
  color: ${props => props.theme.darkGray};
  z-index: 1;
  &.active {
    color: ${props => props.theme.green};
  }
`;

const CircleIcon = styled(GiCircle)`
  height: 10px;
  width: 10px;
  color: ${props => props.theme.darkGray};
`;

interface ControlPanelProps {
  currentWeek: number;
  setCurrentWeek: any;
}

export const WeekProgress = ({
  currentWeek,
  setCurrentWeek
}: ControlPanelProps) => {
  return (
    <Root>
      <StyledTitle>
        Your {userSchedule.dietWeeks.length} week progress
      </StyledTitle>
      <ProgressBar>
        {userSchedule.dietWeeks.map((dietWeek, key) => (
          <ProgressSection
            key={key}
            className={dietWeek.sequence < currentWeek ? 'active' : ''}
          >
            {dietWeek.sequence === currentWeek ? (
              <CircleIcon />
            ) : (
              <PlainCircleIcon
                className={dietWeek.sequence < currentWeek ? 'active' : ''}
              />
            )}
            <StyledParagraph>{dietWeek.sequence}</StyledParagraph>
          </ProgressSection>
        ))}
      </ProgressBar>
    </Root>
  );
};
