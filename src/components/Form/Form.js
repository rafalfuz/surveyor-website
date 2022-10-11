import { StyledForm, StyledLabel, StyledInput } from "./FormStyle";

export const Form = () => {
  return (
    <StyledForm>
      <StyledLabel htmlFor="Name">Imię:<StyledInput width='45%'/></StyledLabel>
      <StyledLabel htmlFor="LastName">Nazwisko:<StyledInput width='45%'/></StyledLabel>
      <StyledLabel htmlFor="email">Email:<StyledInput/></StyledLabel>
      <StyledLabel htmlFor="company">Firma:<StyledInput width='45%'/></StyledLabel>
      <StyledLabel htmlFor="localization">Lokalizacja:<StyledInput width='45%'/></StyledLabel>
    </StyledForm>
  );
};
