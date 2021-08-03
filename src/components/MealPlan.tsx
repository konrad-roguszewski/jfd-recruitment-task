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

const CellContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80px;
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
  background: ${props => props.theme.white};
  color: ${props => props.theme.graphite};
  th,
  td {
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
    text-transform: uppercase;
    color: ${props => props.theme.green};
    font-size: 18px;
    text-align: center;
    &.active {
      color: ${props => props.theme.orange};
    }
  }
  th:last-child,
  th:first-child {
    border: 0;
  }
  th:first-child {
    background: ${props => props.theme.mediumGray};
    border-radius: 8px 0 0 0;
  }
  td {
    padding-top: 10px;
    padding-bottom: 0px;
    font-size: 12px;
    border: 2px solid ${props => props.theme.mediumGray};
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
    padding: 10px 0;
  }
  td:first-child {
    border-right: 2px solid ${props => props.theme.mediumGray};
    border-top: 2px solid ${props => props.theme.mediumGray};
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

export const MealPlan = () => {
  const [data, setData] = useState<UserMealPlan[]>([]);

  useEffect(() => loadData(), []);

  const loadData = () => {
    setData(fetchMealsPlan);
  };

  return (
    <Root>
      <StyledTable>
        <thead>
          <tr>
            <th></th>
            <th>Day 64</th>
            <th className="active">Day 65</th>
            <th>Day 66</th>
            <th>Day 67</th>
            <th>Day 68</th>
            <th>Day 69</th>
            <th>Day 70</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span>6:00 </span>am
            </td>
            {data
              .filter(meal => meal.mealNumber === 1)
              .map((meal, key) => (
                <td key={key}>
                  <CellContent>
                    <span>
                      {meal.mealName}
                      {meal.isMealDone ? <CheckMarkIcon /> : ''}
                    </span>
                    {meal.mealName === 'Bod•ē Shake' ? (
                      <img src={shakeDisabled} alt="shake" />
                    ) : (
                      ''
                    )}
                  </CellContent>
                </td>
              ))}
            <td rowSpan={5}>
              <LastDayContent>
                <span>
                  <BiHappy />
                  Guilt-free day
                </span>
              </LastDayContent>
            </td>
          </tr>
          <tr>
            <td>
              <span>9:00 </span>am
            </td>
            {data
              .filter(meal => meal.mealNumber === 2)
              .map((meal, key) => (
                <td key={key}>
                  <CellContent>
                    <span>
                      {meal.mealName}
                      {meal.isMealDone ? <CheckMarkIcon /> : ''}
                    </span>
                    {meal.mealName === 'Bod•ē Shake' ? (
                      <img src={shakeDisabled} alt="shake" />
                    ) : (
                      ''
                    )}
                  </CellContent>
                </td>
              ))}
          </tr>
          <tr>
            <td>
              <span>12:00 </span>pm
            </td>
            {data
              .filter(meal => meal.mealNumber === 3)
              .map((meal, key) => (
                <td key={key}>
                  <CellContent>
                    <span>
                      {meal.mealName}
                      {meal.isMealDone ? <CheckMarkIcon /> : ''}
                    </span>
                    {meal.mealName === 'Bod•ē Shake' ? (
                      <img src={shakeDisabled} alt="shake" />
                    ) : (
                      ''
                    )}
                  </CellContent>
                </td>
              ))}
          </tr>
          <tr>
            <td>
              <span>3:00 </span>pm
            </td>
            {data
              .filter(meal => meal.mealNumber === 4)
              .map((meal, key) => (
                <td key={key}>
                  <CellContent>
                    <span>
                      {meal.mealName}
                      {meal.isMealDone ? <CheckMarkIcon /> : ''}
                    </span>
                    {meal.mealName === 'Bod•ē Shake' ? (
                      <img src={shakeDisabled} alt="shake" />
                    ) : (
                      ''
                    )}
                  </CellContent>
                </td>
              ))}
          </tr>
          <tr>
            <td style={{ borderBottom: '0px' }}>
              <span>6:00 </span>pm
            </td>
            {data
              .filter(meal => meal.mealNumber === 5)
              .map((meal, key) => (
                <td key={key}>
                  <CellContent>
                    <span>
                      {meal.mealName}
                      {meal.isMealDone ? <CheckMarkIcon /> : ''}
                    </span>
                    {meal.mealName === 'Bod•ē Shake' ? (
                      <img src={shakeDisabled} alt="shake" />
                    ) : (
                      ''
                    )}
                  </CellContent>
                </td>
              ))}
          </tr>
          <DietTypeTableRow>
            <td></td>
            <td>low-carb</td>
            <td>low-carb</td>
            <td>high-carb</td>
            <td>low-carb</td>
            <td>low-carb</td>
            <td>high-carb</td>
            <td rowSpan={2}>
              <span>
                <BiPrinter /> Print
              </span>
            </td>
          </DietTypeTableRow>
          <WorkoutTableRow>
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
            <td>
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
