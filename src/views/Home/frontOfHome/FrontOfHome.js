import { StyledFront, StyledLinkToForm } from "./FrontOfHomeStyle";
import { Logo } from "./Logo";

export const FrontOfHome = () => {
  return (
    <StyledFront>
      <Logo />
      <StyledLinkToForm to="/formularzkontaktowy">
        Umów spotkanie
      </StyledLinkToForm>
    </StyledFront>
  );
};
