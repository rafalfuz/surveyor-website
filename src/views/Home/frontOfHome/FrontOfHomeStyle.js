import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledFront = styled.div`
  width: 50%;
  height: calc(100% - 100px);
  background-color: rgba(150, 198, 217, 0.4);
  position: absolute;
  top: 100px;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 960px) {
    width: 100%;
    height: 50%;
    left: 0;
    top: 25%;
  }
`;

export const StyledLinkToForm = styled(Link)`
  width: 80%;
  height: 10%;
  padding: 20px;
  color: red;
  background-color: ${({ theme }) => theme.primary};
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.xl};
  text-transform: uppercase;
  letter-spacing: 2px;
  border-radius: 20px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  transition: 0.3s;
  @media screen and (max-width: 960px) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
  &:hover {
    color: white;
  }
`;
