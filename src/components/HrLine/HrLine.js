import styled from "styled-components";

const StyledLine = styled.hr`
  border: 0;
  height: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`;

export const HrLine = () => {
  return <StyledLine />;
};


