import { StyledIcon, StyledImage } from "./IconStyle";

export const Icon = ({ icon, altText }) => {
  return (
    <StyledIcon>
      <StyledImage src={icon} alt={altText} />
    </StyledIcon>
  );
};
