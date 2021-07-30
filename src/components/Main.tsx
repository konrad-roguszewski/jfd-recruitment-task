import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex-grow: 1;
  background-color: ${props => props.theme.lightGray};
`;