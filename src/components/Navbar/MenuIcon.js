import { MdMenu, MdClose } from "react-icons/md";
import { StyledMenuIcon, StyledWrapper } from "./MenuIconStyle";

export const MenuIcon = ({ mobile, setMobile }) => {
  return (
    <StyledMenuIcon onClick={() => setMobile(!mobile)}>
      {mobile ? (
        <StyledWrapper>
          <MdClose />
        </StyledWrapper>
      ) : (
        <StyledWrapper>
          <MdMenu />
        </StyledWrapper>
      )}
    </StyledMenuIcon>
  );
};
