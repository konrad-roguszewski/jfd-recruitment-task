import { BiDumbbell } from 'react-icons/bi';
import { BiCheck } from 'react-icons/bi';
import { BiPrinter } from 'react-icons/bi';
import { BiHappy } from 'react-icons/bi';
import { BiCaretRight } from 'react-icons/bi';
import { BiCheckCircle } from 'react-icons/bi';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import shakeActive from '../images/shakeActive.png';
import shakeDisabled from '../images/shakeDisabled.png';
import { fetchMealsPlan } from '../data/fetchMealsPlan';
import { userSchedule } from '../data/userSchedule';

const CellContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 78px;
  width: 95px;
  position: relative;
  img {
    height: 60px;
    width: 90px;
    margin: 0 auto;
  }
  span {
    display: flex;
    align-items: center;
    white-space: initial;
    line-height: 1.6;
    &.currentDay {
      color: ${props => props.theme.black};
    }
    svg {
      position: absolute;
      left: 90px;
      top: -5px;
    }
  }
`;

const CheckMarkIcon = styled(BiCheckCircle)`
  height: 18px;
  width: 18px;
  color: ${props => props.theme.orange};
`;

const StyledTable = styled.table`
  border-collapse: collapse;
  min-width: 100%;
  border-radius: 8px;
  color: ${props => props.theme.graphite};
  th,
  td {
    background: ${props => props.theme.white};
    padding: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  th {
    top: 0;
    text-align: left;
    font-weight: bold;
    border: 2px solid ${props => props.theme.mediumGray};
    border-top: 0;
    border-bottom: 0;
    text-transform: uppercase;
    color: ${props => props.theme.green};
    font-size: 18px;
    text-align: center;
    &.currentDay {
      color: ${props => props.theme.orange};
      border-color: ${props => props.theme.orange};
      border-width: 0 2px;
      border-top: 2px solid;
    }
  }
  th:last-child,
  th:first-child {
    border: 0;
    & + th {
      border-right: 0;
      border-bottom: 0;
    }
  }
  th:first-child {
    background: ${props => props.theme.mediumGray};
    border-radius: 8px 0 0 0;
  }
  th:last-child {
    border-radius: 0 8px 0 0;
  }
  td {
    padding-top: 10px;
    padding-bottom: 0px;
    font-size: 12px;
    border: 2px solid ${props => props.theme.mediumGray};
    &.currentDay {
      border-color: ${props => props.theme.orange};
      border-width: 0 2px;
      border-top: 2px solid ${props => props.theme.mediumGray};
      border-right: 2px solid ${props => props.theme.orange};
    }
  }
  td:last-child {
    border-right: 0;
  }
  td:first-child {
    border-left: 0;
    background: ${props => props.theme.mediumGray};
    border-bottom: 2px solid ${props => props.theme.darkGray};
    text-transform: uppercase;
    font-size: 12px;
    text-align: center;
    padding: 0;
    span {
      font-weight: bold;
    }
    & + td {
      border-right: 0;
      border-bottom: 0;
    }
  }
`;

const LastDayContent = styled.div`
  width: 95px;
  font-size: 27px;
  color: ${props => props.theme.darkGray};
  text-transform: uppercase;
  display: flex;
  flex-direction: row;
  justify-content: center;
  transform: rotate(-90deg);
  span {
    display: flex;
    align-items: center;
  }
  svg {
    transform: rotate(90deg);
    padding: 0 28px;
  }
`;

const DietTypeTableRow = styled.tr`
  td {
    text-transform: uppercase;
    background: ${props => props.theme.mediumGray};
    text-align: center;
    border: 2px solid ${props => props.theme.darkGray};
    border-top: 2px solid ${props => props.theme.mediumGray};
    padding: 10px 0;
    border-right: 0;
    &.currentDay {
      border-top: 2px solid ${props => props.theme.mediumGray};
    }
  }
  td:first-child {
    border-right: 2px solid ${props => props.theme.mediumGray};
    border-top: thick solid ${props => props.theme.mediumGray};
  }
  td:last-child {
    border-bottom: 0;
    border-radius: 0 0 8px 0;
    text-transform: none;
    span {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      svg {
        height: 28px;
        width: 28px;
        padding-right: 5px;
      }
    }
  }
`;

const WorkoutTableRow = styled.tr`
  td {
    background: ${props => props.theme.mediumGray};
    border: 2px solid ${props => props.theme.darkGray};
    border-bottom: 0;
    padding: 5px 10px;
    text-align: center;
    border-right: 0;
    &.currentDay {
      border-bottom: 2px solid ${props => props.theme.orange};
      border-top: 2px solid ${props => props.theme.darkGray};
    }
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      svg {
        height: 14px;
        width: 14px;
      }
      svg:first-child {
        height: 24px;
        width: 24px;
      }
      &.active {
        color: ${props => props.theme.orange};
      }
    }
  }
  td:first-child {
    border-bottom: 0;
    border-radius: 0 0 0 8px;
    border-right: 2px solid ${props => props.theme.mediumGray};
    text-transform: none;
    padding: 10px;
    span {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 10px;
      font-weight: normal;
    }
  }
`;

const Root = styled.div`
  overflow-y: auto;
  @media screen and (max-width: 768px) {
    overflow-x: auto;
  }
`;

interface UserMealPlan {
  week: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  day: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  mealNumber: 1 | 2 | 3 | 4 | 5;
  mealName: string;
  isMealDone: boolean;
}

interface ControlPanelProps {
  selectedWeek: number;
  setSelectedWeek: any;
}

export const MealPlan = ({
  selectedWeek,
  setSelectedWeek
}: ControlPanelProps) => {
  const [data, setData] = useState<UserMealPlan[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentDay, setCurrentDay] = useState(2);

  useEffect(() => loadData(), []);

  const loadData = () => {
    setData(fetchMealsPlan);
  };

  return (
    <Root>
      {/* TODO: rozbić komponent tabeli na subkomponenty */}
      <StyledTable>
        <thead>
          <tr>
            <th></th>
            {userSchedule.dietDays
              .slice()
              .reverse()
              .map((dietDay, key) => (
                <th
                  key={key}
                  className={dietDay === 7 - currentDay ? 'currentDay' : ''}
                >
                  Day {selectedWeek * 7 - dietDay}
                </th>
              ))}
            <th>Day {selectedWeek * 7}</th>
          </tr>
        </thead>
        <tbody>
          {userSchedule.dietHours.map((dietHour, key) => (
            <tr key={key}>
              <td>
                <span>{dietHour.hour} </span>
                {dietHour.suffix}
              </td>
              {data
                // .filter(meal => meal.week === selectedWeek) // w przypadku danych ze wszystkimi tygodniami
                .filter(meal => meal.mealNumber === dietHour.sequence)
                .map((meal, key) => (
                  <td
                    key={key}
                    // TODO: poniższy warunek (oraz analogiczne) do zmiany (dla pełnej bazy danych) - zamiast sekwencji dnia -> numer dnia np. według wzoru użytego w thead oraz odczytanie dzisiejszego dnia z obiektu Date (dodatkowo odczytanie daty pierwszego dnia diety dla punktu odniesienia w czasie)
                    className={meal.day === currentDay ? 'currentDay' : ''}
                  >
                    <CellContent>
                      <span
                        className={meal.day === currentDay ? 'currentDay' : ''}
                      >
                        {meal.mealName}
                        {meal.isMealDone ? <CheckMarkIcon /> : ''}
                      </span>
                      {meal.mealName === 'Bod•ē Shake' ? (
                        <img
                          src={
                            meal.day === currentDay
                              ? shakeActive
                              : shakeDisabled
                          }
                          alt="shake"
                        />
                      ) : (
                        ''
                      )}
                    </CellContent>
                  </td>
                ))}
              {dietHour.sequence === 1 ? (
                <td rowSpan={userSchedule.dietHours.length}>
                  <LastDayContent>
                    <span>
                      <BiHappy />
                      Guilt-free day
                    </span>
                  </LastDayContent>
                </td>
              ) : (
                null
              )}
            </tr>
          ))}
          <DietTypeTableRow>
            <td></td>
            {userSchedule.dietDays.map((dietDay, key) => (
              <td
                key={key}
                className={dietDay === currentDay ? 'currentDay' : ''}
              >
                {data
                  .filter(meal => meal.day === dietDay)
                  .filter(meal => meal.mealName.includes('HC')).length > 0
                  ? 'high-carb'
                  : 'low-carb'}
              </td>
            ))}
            <td rowSpan={2}>
              <span>
                <BiPrinter /> Print
              </span>
            </td>
          </DietTypeTableRow>
          <WorkoutTableRow>
            {/* TODO: mapowanie ikon po dniach oraz nowy stan dotyczący zaznaczenia*/}
            <td>
              <span>
                Workout <BiCaretRight />
              </span>
            </td>
            <td>
              <div className="active">
                <BiDumbbell />
                <BiCheck />
              </div>
            </td>
            <td className="currentDay">
              <div className="active">
                <BiDumbbell />
                <BiCheck />
              </div>
            </td>
            <td>
              <div>
                <BiDumbbell />
              </div>
            </td>
            <td>
              <div>
                <BiDumbbell />
              </div>
            </td>
            <td>
              <div>
                <BiDumbbell />
              </div>
            </td>
            <td>
              <div>
                <BiDumbbell />
              </div>
            </td>
          </WorkoutTableRow>
        </tbody>
      </StyledTable>
    </Root>
  );
};
