import { AiOutlineDown } from "react-icons/ai";
import styled from 'styled-components';

const Root = styled.div`
  display: flex;
  align-items: center;
`;

const StyledImage = styled.img`
  border: 1px solid ${props => props.theme.graphite};
  border-radius: 50%;
  height: 36px;
  width: 36px;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: ${props => props.theme.graphite};
  margin: 5px;
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

const StyledIcon = styled(AiOutlineDown)`
  color: ${props => props.theme.graphite};
  height: 12px;
  width: 12px;
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const Profile = () => {
  return (
    <Root>
      <StyledImage src="https://picsum.photos/id/1027/36/36" alt="avatar" />
      <StyledLink href="profile">Olivia Wilde</StyledLink>
      <StyledIcon />
    </Root>
  );
};
