import { Navigation } from './Navigation';
import { Profile } from './Profile';
import styled from 'styled-components';

const Root = styled.div`
  background: ${props => props.theme.white};
  border-bottom: 2px solid ${props => props.theme.mediumGray};
`;

const StyledHeader = styled.header`
  height: 80px;
  display: flex;
  width: 96%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 2%;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 480px) {
    width: 94%;
    padding: 0 3%;
  }
`;

export const Header = () => {
  return (
    <Root>
      <StyledHeader>
        <Navigation />
        <Profile />
      </StyledHeader>
    </Root>
  );
};
