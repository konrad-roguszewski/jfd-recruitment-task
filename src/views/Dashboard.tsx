import { ControlPanel } from "../components/ControlPanel";
import { MealPlan } from "../components/MealPlan";
import styled from "styled-components";

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
  return (
    <Root>
      <ControlPanel />
      <MealPlan />
    </Root>
  );
};
