import { WeekProgress } from "./WeekProgress";
import { WeekSlider } from "./WeekSlider";
import { ProteinOptions } from "./ProteinOptions";
import styled from "styled-components";

const Root = styled.div`
  height: 110px;
  display: flex;
`;

export const ControlPanel = () => {
  return (
    <Root>
      <WeekProgress />
      <WeekSlider />
      <ProteinOptions />
    </Root>
  )
}
