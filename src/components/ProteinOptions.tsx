import styled from 'styled-components';
import { GiBroccoli } from 'react-icons/gi';
import { GiCheeseWedge } from 'react-icons/gi';
import { GiSteak } from 'react-icons/gi';
import { GiFriedFish } from 'react-icons/gi';
import { GiChickenOven } from 'react-icons/gi';

const StyledParagraph = styled.p`
  text-transform: uppercase;
  font-size: 10px;
  color: ${props => props.theme.graphite};
  margin-top: 0;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
  @media screen and (max-width: 480px) {
    font-size: 0.7rem;
  }
`;

const IconsGroup = styled.div`
  display: flex;
  color: ${props => props.theme.darkGray};
  @media screen and (max-width: 768px) {
    margin-bottom: 36px;
  }
`;

const StyledBroccoliIcon = styled(GiBroccoli)`
  height: 28px;
  width: 28px;
  &.active {
    color: ${props => props.theme.green};
  }
`;

const StyledCheeseIcon = styled(GiCheeseWedge)`
  height: 28px;
  width: 28px;
  margin-left: 10px;
  &.active {
    color: ${props => props.theme.green};
  }
`;

const StyledSteakIcon = styled(GiSteak)`
  height: 28px;
  width: 28px;
  margin-left: 10px;
  &.active {
    color: ${props => props.theme.green};
  }
`;

const StyledFishIcon = styled(GiFriedFish)`
  height: 28px;
  width: 28px;
  margin-left: 10px;
  &.active {
    color: ${props => props.theme.green};
  }
`;

const StyledChickenIcon = styled(GiChickenOven)`
  height: 28px;
  width: 28px;
  margin-left: 10px;
  &.active {
    color: ${props => props.theme.green};
  }
`;

export const ProteinOptions = () => {
  return (
    <div>
      <StyledParagraph>Select your protein options</StyledParagraph>
      <IconsGroup>
        <StyledBroccoliIcon className="active" />
        <StyledCheeseIcon className="active" />
        <StyledSteakIcon className="active" />
        <StyledFishIcon />
        <StyledChickenIcon />
      </IconsGroup>
    </div>
  );
};
