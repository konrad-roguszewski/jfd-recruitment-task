import styled from 'styled-components';

const StyledNav = styled.nav`
  margin-left: 120px;
  border-left: 1px solid ${props => props.theme.mediumGray};
  height: 80px;
  display: flex;
`;

const StyledList = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
`;

const StyledListItem = styled.li`
  list-style-type: none;
  margin-left: 30px;
  display: flex;
  align-items: center;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: ${props => props.theme.graphite};
  text-transform: uppercase;
  font-weight: bold;

  &.active {
    color: ${props => props.theme.orange};
    position: relative;
    z-index: 1;
    &:before {
      content: '';
      position: absolute;
      left: 37%;
      bottom: -10px;
      height: 0;
      width: 25%;
      border-bottom: 2px solid ${props => props.theme.orange};
    }
  }
`;

export const Navigation = () => {
  return (
    <StyledNav>
      <StyledList>
        <StyledListItem>
          <StyledLink href="dashboard" className="active">
            Dashboard
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink href="recipes">Recipes</StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink href="challenge">Challenge</StyledLink>
        </StyledListItem>
      </StyledList>
    </StyledNav>
  );
};
