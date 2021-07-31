import styled from 'styled-components';
import { GiPlainCircle } from 'react-icons/gi';
import { GiCircle } from 'react-icons/gi';

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledTitle = styled.p`
  text-transform: uppercase;
  font-size: 10px;
  color: ${props => props.theme.graphite};
  margin-left: 10px;
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
  &:before {
    content: '';
    position: absolute;
    left: 10px;
    bottom: 86%;
    width: 14px;
    border-bottom: 2px solid ${props => props.theme.darkGray};
  }
  &.active {
    &:before {
      content: '';
      position: absolute;
      left: 10px;
      bottom: 86%;
      width: 14px;
      border-bottom: 2px solid ${props => props.theme.green};
    }
  }
`;

const LastProgressSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 10px;
`;

const PlainCircleIcon = styled(GiPlainCircle)`
  height: 10px;
  width: 10px;
  color: ${props => props.theme.darkGray};
  &.active {
    color: ${props => props.theme.green};
  }
`;

const CircleIcon = styled(GiCircle)`
  height: 10px;
  width: 10px;
  color: ${props => props.theme.darkGray};
`;

export const WeekProgress = () => {
  return (
    <Root>
      <StyledTitle>Your 12 week progress</StyledTitle>
      <ProgressBar>
        <ProgressSection className="active">
          <PlainCircleIcon className="active" />
          <StyledParagraph>1</StyledParagraph>
        </ProgressSection>
        <ProgressSection className="active">
          <PlainCircleIcon className="active"/>
          <StyledParagraph>2</StyledParagraph>
        </ProgressSection>
        <ProgressSection className="active">
          <PlainCircleIcon className="active"/>
          <StyledParagraph>3</StyledParagraph>
        </ProgressSection>
        <ProgressSection className="active">
          <PlainCircleIcon className="active"/>
          <StyledParagraph>4</StyledParagraph>
        </ProgressSection>
        <ProgressSection className="active">
          <PlainCircleIcon className="active"/>
          <StyledParagraph>5</StyledParagraph>
        </ProgressSection>
        <ProgressSection>
          <PlainCircleIcon className="active"/>
          <StyledParagraph>6</StyledParagraph>
        </ProgressSection>
        <ProgressSection>
          <CircleIcon />
          <StyledParagraph>7</StyledParagraph>
        </ProgressSection>
        <ProgressSection>
          <PlainCircleIcon />
          <StyledParagraph>8</StyledParagraph>
        </ProgressSection>
        <ProgressSection>
          <PlainCircleIcon />
          <StyledParagraph>9</StyledParagraph>
        </ProgressSection>
        <ProgressSection>
          <PlainCircleIcon />
          <StyledParagraph>10</StyledParagraph>
        </ProgressSection>
        <ProgressSection>
          <PlainCircleIcon />
          <StyledParagraph>11</StyledParagraph>
        </ProgressSection>
        <LastProgressSection>
          <PlainCircleIcon />
          <StyledParagraph>12</StyledParagraph>
        </LastProgressSection>
      </ProgressBar>
    </Root>
  );
};
