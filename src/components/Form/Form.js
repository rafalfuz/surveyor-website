import { StyledForm, StyledLabel, StyledInput } from "./FormStyle";

export const Form = () => {
  return (
    <StyledForm>
      <StyledLabel htmlFor="Imię"></StyledLabel>
      <StyledInput />
      <StyledInput />
      <StyledInput />
      <StyledInput />
      <StyledInput />
    </StyledForm>
  );
};
