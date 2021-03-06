import { useState } from 'react';
import styled from 'styled-components';
import { ControlPanel } from '../components/ControlPanel';
import { MealPlan } from '../components/MealPlan';

const Root = styled.div`
  height: 688px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 96%;
  max-width: 1024px;
  padding: 0 2%;
  @media screen and (max-width: 768px) {
    height: auto;
  }
  @media screen and (max-width: 480px) {
    width: 94%;
    padding: 0 3%;
  }
`;

export const Dashboard = () => {
  const [currentWeek, setCurrentWeek] = useState(7); // docelowo wartość domyślna będzie pochodzić z obiektu Date
  const [selectedWeek, setSelectedWeek] = useState(currentWeek);

  return (
    <Root>
      <ControlPanel
        selectedWeek={selectedWeek}
        setSelectedWeek={setSelectedWeek}
        currentWeek={currentWeek}
        setCurrentWeek={setCurrentWeek}
      />
      <MealPlan selectedWeek={selectedWeek} setSelectedWeek={setSelectedWeek} />
    </Root>
  );
};
