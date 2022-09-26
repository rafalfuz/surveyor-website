import styled from "styled-components";

export const StyledButton = styled.button`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: ${({ padding }) => padding};
  background-color: ${({ backgroundColor }) => backgroundColor || "black"};
  color: ${({ color }) => color};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border-radius: 10px;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSize.l};
  letter-spacing: 2px;
  outline: 2px solid black;
  &:hover {
    transition: all 0.4s ease;
    width: 75%;
    color: red;
    cursor: pointer;
    outline: 5px solid black;
    background-color: transparent;
  }
`;
