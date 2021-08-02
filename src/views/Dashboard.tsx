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
`;

export const Dashboard = () => {
  const [currentWeek, setCurrentWeek] = useState(7);

  return (
    <Root>
      <ControlPanel currentWeek={currentWeek} setCurrentWeek={setCurrentWeek} />
      <MealPlan />
    </Root>
  );
};
