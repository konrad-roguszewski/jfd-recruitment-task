import { BiDumbbell } from 'react-icons/bi';
import { BiCheck } from 'react-icons/bi';
import { BiPrinter } from 'react-icons/bi';
import { BiHappy } from 'react-icons/bi';
import { BiCaretRight } from 'react-icons/bi';
import { BiCheckCircle } from 'react-icons/bi';
import styled from 'styled-components';
import shakeActive from '../images/shakeActive.png';
import shakeDisabled from '../images/shakeDisabled.png';

const StyledTable = styled.table`
  display: grid;
  border-collapse: collapse;
  min-width: 100%;
  grid-template-columns:
    minmax(80px, 1fr)
    minmax(125px, 1fr)
    minmax(125px, 1fr)
    minmax(125px, 1fr)
    minmax(125px, 1fr)
    minmax(125px, 1fr)
    minmax(125px, 1fr)
    minmax(125px, 1fr);
  border: 1px solid ${props => props.theme.lightGray};
  border-radius: 10px;
  background: ${props => props.theme.white};
  color: ${props => props.theme.graphite};
  thead,
  tbody,
  tr {
    display: contents;
  }
  th,
  td {
    padding: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  th {
    position: sticky;
    top: 0;
    text-align: left;
    font-weight: normal;
    border: 1px solid ${props => props.theme.darkGray};
  }
  th:last-child,
  th:first-child {
    border: 0;
  }
  td {
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 12px;
    border: 1px solid ${props => props.theme.darkGray};
  }
`;

const CellContent = styled.div`
  display: flex;
  flex-direction: column;
  img {
    height: 60px;
    width: 90px;
  }
`;

const CheckMarkIcon = styled(BiCheckCircle)`
  height: 18px;
  width: 18px;
  color: ${props => props.theme.orange};
`;

export const MealPlan = () => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th style={{ border: '1px solid black' }}></th>
            <th style={{ border: '1px solid black' }}>Day 64</th>
            <th style={{ border: '1px solid black' }}>Day 65</th>
            <th style={{ border: '1px solid black' }}>Day 66</th>
            <th style={{ border: '1px solid black' }}>Day 67</th>
            <th style={{ border: '1px solid black' }}>Day 68</th>
            <th style={{ border: '1px solid black' }}>Day 69</th>
            <th style={{ border: '1px solid black' }}>Day 70</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid black' }}>6 am</td>
            <td style={{ border: '1px solid black' }}>bode shake</td>
            <td style={{ border: '1px solid black' }}>bode shake</td>
            <td style={{ border: '1px solid black' }}>bode shake</td>
            <td style={{ border: '1px solid black' }}>bode shake</td>
            <td style={{ border: '1px solid black' }}>bode shake</td>
            <td style={{ border: '1px solid black' }}>bode shake</td>
            <td rowSpan={5} style={{ border: '1px solid black' }}>
              guilt-free :)
            </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black' }}>9 am</td>
            <td style={{ border: '1px solid black' }}>bode shake</td>
            <td style={{ border: '1px solid black' }}>bode shake</td>
            <td style={{ border: '1px solid black' }}>bode shake</td>
            <td style={{ border: '1px solid black' }}>bode shake</td>
            <td style={{ border: '1px solid black' }}>bode shake</td>
            <td style={{ border: '1px solid black' }}>bode shake</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black' }}>12 pm</td>
            <td style={{ border: '1px solid black' }}>bode shake</td>
            <td style={{ border: '1px solid black' }}>bode shake</td>
            <td style={{ border: '1px solid black' }}>bode shake</td>
            <td style={{ border: '1px solid black' }}>bode shake</td>
            <td style={{ border: '1px solid black' }}>bode shake</td>
            <td style={{ border: '1px solid black' }}>bode shake</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black' }}>3 pm</td>
            <td style={{ border: '1px solid black' }}>bode shake</td>
            <td style={{ border: '1px solid black' }}>bode shake</td>
            <td style={{ border: '1px solid black' }}>bode shake</td>
            <td style={{ border: '1px solid black' }}>bode shake</td>
            <td style={{ border: '1px solid black' }}>bode shake</td>
            <td style={{ border: '1px solid black' }}>bode shake</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black' }}>6 pm</td>
            <td style={{ border: '1px solid black' }}>bode shake</td>
            <td style={{ border: '1px solid black' }}>bode shake</td>
            <td style={{ border: '1px solid black' }}>bode shake</td>
            <td style={{ border: '1px solid black' }}>bode shake</td>
            <td style={{ border: '1px solid black' }}>bode shake</td>
            <td style={{ border: '1px solid black' }}>bode shake</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black' }}></td>
            <td style={{ border: '1px solid black' }}>low-carb</td>
            <td style={{ border: '1px solid black' }}>low-carb</td>
            <td style={{ border: '1px solid black' }}>low-carb</td>
            <td style={{ border: '1px solid black' }}>low-carb</td>
            <td style={{ border: '1px solid black' }}>low-carb</td>
            <td style={{ border: '1px solid black' }}>low-carb</td>
            <td rowSpan={2} style={{ border: '1px solid black' }}>
              print
            </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black' }}>workout</td>
            <td style={{ border: '1px solid black' }}>yes</td>
            <td style={{ border: '1px solid black' }}>yes</td>
            <td style={{ border: '1px solid black' }}>yes</td>
            <td style={{ border: '1px solid black' }}>yes</td>
            <td style={{ border: '1px solid black' }}>yes</td>
            <td style={{ border: '1px solid black' }}>yes</td>
          </tr>
        </tbody>
      </table>

      <StyledTable>
        <thead>
          <tr>
            <th></th>
            <th>Day 64</th>
            <th>Day 65</th>
            <th>Day 66</th>
            <th>Day 67</th>
            <th>Day 68</th>
            <th>Day 69</th>
            <th>Day 70</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>6:00 AM</td>
            <td>
              <CellContent>
                <span>
                  Bod•ē Shake
                  <CheckMarkIcon />
                </span>
                <img src={shakeDisabled} alt="shake" />
              </CellContent>
            </td>
            <td>
              <CellContent>
                <span>
                  Bod•ē Shake
                  <CheckMarkIcon />
                </span>
                <img src={shakeActive} alt="shake" />
              </CellContent>
            </td>
            <td>Bod•ē Shake</td>
            <td>Bod•ē Shake</td>
            <td>Bod•ē Shake</td>
            <td>Bod•ē Shake</td>
            <td rowSpan={5}>
              <span>
                Guilt-free day <BiHappy />
              </span>
            </td>
          </tr>
          <tr>
            <td>9:00 AM</td>
            <td>Bod•ē Shake</td>
            <td>Bod•ē Shake</td>
            <td>Bod•ē Shake</td>
            <td>Bod•ē Shake</td>
            <td>Bod•ē Shake</td>
            <td>Bod•ē Shake</td>
            <td></td>
          </tr>
          <tr>
            <td>12:00 PM</td>
            <td>Bod•ē Shake</td>
            <td>Bod•ē Shake</td>
            <td>Bod•ē Shake</td>
            <td>Bod•ē Shake</td>
            <td>Bod•ē Shake</td>
            <td>Bod•ē Shake</td>
            <td></td>
          </tr>
          <tr>
            <td>3:00 PM</td>
            <td>Bod•ē Shake</td>
            <td>Bod•ē Shake</td>
            <td>Bod•ē Shake</td>
            <td>Bod•ē Shake</td>
            <td>Bod•ē Shake</td>
            <td>Bod•ē Shake</td>
            <td></td>
          </tr>
          <tr>
            <td>6:00 PM</td>
            <td>Bod•ē Shake</td>
            <td>Bod•ē Shake</td>
            <td>Bod•ē Shake</td>
            <td>Bod•ē Shake</td>
            <td>Bod•ē Shake</td>
            <td>Bod•ē Shake</td>
            <td></td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>Low-Carb</td>
            <td>Low-Carb</td>
            <td>Low-Carb</td>
            <td>Low-Carb</td>
            <td>Low-Carb</td>
            <td>Low-Carb</td>
            <td></td>
          </tr>
          <tr>
            <td>
              Workout <BiCaretRight />
            </td>
            <td>
              <BiDumbbell />
              <BiCheck />
            </td>
            <td>
              <BiDumbbell />
              <BiCheck />
            </td>
            <td>
              <BiDumbbell />
            </td>
            <td>
              <BiDumbbell />
            </td>
            <td>
              <BiDumbbell />
            </td>
            <td>
              <BiDumbbell />
            </td>
            <td>
              <BiPrinter /> Print
            </td>
          </tr>
        </tbody>
      </StyledTable>
    </>
  );
};
