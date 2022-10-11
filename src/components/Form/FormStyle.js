import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  border: 1px solid white;
  height: auto;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: space-between;
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin: 20px;
  color: white;
  flex-basis: 100%;
`;

export const StyledInput = styled.input`
  width: ${({width})=>width || '100%'};
  height: 50px;
  padding: 10px;
  margin: 10px 0 0 0;
`;
