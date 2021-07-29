import { ControlPanel } from "../components/ControlPanel";
import { MealPlan } from "../components/MealPlan";
import styled from "styled-components";

const Root = styled.div`
  height: 688px;
  width: 1024px;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const Dashboard = () => {
  return (
    <Root>
      <ControlPanel />
      <MealPlan />
    </Root>
  );
};
