import { Navigation } from "./Navigation";
import { Profile } from "./Profile";
import styled from "styled-components";

const Root = styled.header`
  height: 80px;
  background-color: #fff;
  display: flex;
`;

export const Header = () => {
  return (
    <Root>
      <Navigation />
      <Profile />
    </Root>
  );
};
