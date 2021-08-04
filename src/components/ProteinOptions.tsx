import { useState } from 'react';
import styled from 'styled-components';
import { GiBroccoli } from 'react-icons/gi';
import { GiCheeseWedge } from 'react-icons/gi';
import { GiSteak } from 'react-icons/gi';
import { GiFriedFish } from 'react-icons/gi';
import { GiChickenOven } from 'react-icons/gi';
import { userSchedule } from '../data/userSchedule';

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

const StyledVegetablesIcon = styled(GiBroccoli)`
  height: 28px;
  width: 28px;
  &.active {
    color: ${props => props.theme.green};
  }
`;

const StyledDairyIcon = styled(GiCheeseWedge)`
  height: 28px;
  width: 28px;
  margin-left: 10px;
  &.active {
    color: ${props => props.theme.green};
  }
`;

const StyledBeefIcon = styled(GiSteak)`
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

const StyledPoultryIcon = styled(GiChickenOven)`
  height: 28px;
  width: 28px;
  margin-left: 10px;
  &.active {
    color: ${props => props.theme.green};
  }
`;

export const ProteinOptions = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedOption, setSelectedOption] = useState([
    'Vegetables',
    'Dairy',
    'Beef'
  ]);

  return (
    <div>
      <StyledParagraph>Select your protein options</StyledParagraph>
      <IconsGroup>
        {/* eslint-disable-next-line array-callback-return */}
        {userSchedule.dietProteinOptions.map((dietOption, key) => {
          switch (dietOption.name) {
            case 'Vegetables':
              return (
                <StyledVegetablesIcon
                  key={key}
                  className={
                    selectedOption.includes('Vegetables') ? 'active' : ''
                  }
                />
              );
            case 'Dairy':
              return (
                <StyledDairyIcon
                  key={key}
                  className={selectedOption.includes('Dairy') ? 'active' : ''}
                />
              );
            case 'Beef':
              return (
                <StyledBeefIcon
                  key={key}
                  className={selectedOption.includes('Beef') ? 'active' : ''}
                />
              );
            case 'Fish':
              return (
                <StyledFishIcon
                  key={key}
                  className={selectedOption.includes('Fish') ? 'active' : ''}
                />
              );
            case 'Poultry':
              return (
                <StyledPoultryIcon
                  key={key}
                  className={selectedOption.includes('Poultry') ? 'active' : ''}
                />
              );
          }
        })}
      </IconsGroup>
    </div>
  );
};
