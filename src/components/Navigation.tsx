import styled from 'styled-components';
import { AiOutlineMenu } from 'react-icons/ai';

const StyledNav = styled.nav`
  margin-left: 120px;
  border-left: 1px solid ${props => props.theme.mediumGray};
  height: 80px;
  display: flex;
  svg {
    display: none;
  }
  @media screen and (max-width: 480px) {
    margin-left: 0;
    border-left: 0;
    align-items: center;
    svg {
      display: block;
      height: 24px;
      width: 24px;
    }
  }
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
  @media screen and (max-width: 480px) {
    display: none;
  }
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
    @media screen and (max-width: 480px) {
      display: block;
      color: ${props => props.theme.graphite};
      &:before {
        content: '';
        position: absolute;
        left: 37%;
        bottom: -10px;
        height: 0;
        width: 25%;
        border-bottom: 2px solid ${props => props.theme.white};
      }
    }
  }
`;

export const Navigation = () => {
  return (
    <StyledNav>
      <AiOutlineMenu />
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
