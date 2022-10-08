import { HrLine } from "../HrLine/HrLine";
import {
  StyledReferenceItem,
  StyledLogoContainer,
  StyledLogo,
  StyledContainer,
  StyledTitle,
  StyledDescription,
  StyledLink,
} from "./ReferenceItemStyle";

export const ReferenceItem = ({
  logoImg,
  logoWidth,
  logoHeight,
  company,
  description,
  service,
  link,
}) => {
  return (
    <>
      <StyledReferenceItem>
        <StyledLogoContainer>
          <StyledLogo
            src={logoImg}
            logoWidth={logoWidth}
            logoHeight={logoHeight}
          />
        </StyledLogoContainer>

        <StyledContainer>
          <StyledTitle>{company}</StyledTitle>
          <StyledDescription>{description}</StyledDescription>
          <StyledLink to={link}>{service}</StyledLink>
        </StyledContainer>
      </StyledReferenceItem>
      <HrLine />
    </>
  );
};
