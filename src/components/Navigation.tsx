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
  ul.dropdown {
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
    ul.dropdown {
      display: none;
    }
    &:hover {
      ul.dropdown {
        visibility: visible;
        position: absolute;
        list-style: none;
        margin: 0;
        padding-left: 0;
        display: flex;
        flex-direction: column;
        bottom: 0;
        top: 80px;
        left: 0;
        z-index: 2;
        animation: growDown 300ms ease-in-out forwards;
        transform-origin: top center;
        @keyframes growDown {
          0% {
            transform: scaleY(0);
          }
          80% {
            transform: scaleY(1.1);
          }
          100% {
            transform: scaleY(1);
          }
        }
        a {
          text-decoration: none;
          color: ${props => props.theme.graphite};
          text-transform: uppercase;
          font-weight: bold;
          &.active {
            color: ${props => props.theme.orange};
          }
        }
        li {
          background: ${props => props.theme.white};
          padding: 1rem;
          position: relative;
          text-decoration: none;
          transition-duration: 0.5s;
          transition: all 1.5s ease;
          border-top: 2px solid ${props => props.theme.mediumGray};
          &:hover {
            background: ${props => props.theme.mediumGray};
          }
        }
      }
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
      <ul className="dropdown" aria-label="submenu">
        <li>
          <a href="dashboard" className="active">
            Dashboard
          </a>
        </li>
        <li>
          <a href="recipes">Recipes</a>
        </li>
        <li>
          <a href="challenge">Challenge</a>
        </li>
      </ul>
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
