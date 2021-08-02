import { WeekProgress } from './WeekProgress';
import { WeekSlider } from './WeekSlider';
import { ProteinOptions } from './ProteinOptions';
import styled from 'styled-components';

const Root = styled.div`
  height: 110px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

interface ControlPanelProps {
  currentWeek: number;
  setCurrentWeek: any;
}

export const ControlPanel = ({
  currentWeek,
  setCurrentWeek
}: ControlPanelProps) => {
  return (
    <Root>
      <WeekProgress />
      <WeekSlider currentWeek={currentWeek} setCurrentWeek={setCurrentWeek} />
      <ProteinOptions />
    </Root>
  );
};
