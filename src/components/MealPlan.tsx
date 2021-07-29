import { BiDumbbell } from "react-icons/bi";
import { BiCheck } from "react-icons/bi";
import { BiPrinter } from "react-icons/bi";
import { BiHappy } from "react-icons/bi";
import styled from "styled-components";

const StyledTable = styled.table`
  border: 1px dashed black;
`;

export const MealPlan = () => {
  return (
    <StyledTable>
      <tr>
        <td>&nbsp;</td>
        <td>Day 64</td>
        <td>Day 65</td>
        <td>Day 66</td>
        <td>Day 67</td>
        <td>Day 68</td>
        <td>Day 69</td>
        <td>Day 70</td>
      </tr>
      <tr>
        <td>6:00 AM</td>
        <td>Bod•ē Shake</td>
        <td>Bod•ē Shake</td>
        <td>Bod•ē Shake</td>
        <td>Bod•ē Shake</td>
        <td>Bod•ē Shake</td>
        <td>Bod•ē Shake</td>
        <td></td>
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
        <td>Guilt-free day</td>
      </tr>
      <tr>
        <td>&nbsp;</td>
        <td>Low-Carb</td>
        <td>Low-Carb</td>
        <td>Low-Carb</td>
        <td>Low-Carb</td>
        <td>Low-Carb</td>
        <td>Low-Carb</td>
        <td><BiHappy /></td>
      </tr>
      <tr>
        <td>Workout</td>
        <td><BiDumbbell /><BiCheck /></td>
        <td><BiDumbbell /><BiCheck /></td>
        <td><BiDumbbell /></td>
        <td><BiDumbbell /></td>
        <td><BiDumbbell /></td>
        <td><BiDumbbell /></td>
        <td><BiPrinter /> Print</td>
      </tr>
    </StyledTable>
  );
};
