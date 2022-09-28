import {
  StyledAbout,
  StyledAboutContainer,
  StyledPhotoWrapper,
  StyledSelfie,
  StyledName,
  StyledDescriptionWrapper,
  StyledDescription,
} from "./AboutStyle.js";
import constructor from "../../assets/Photos/construction.png";
import { StyledSectionTitle } from "../../components/TitleOfSection/TitleOfSection";

export const About = () => {
  return (
    <StyledAbout>
      <StyledSectionTitle>O mnie</StyledSectionTitle>
      <StyledAboutContainer>
        <StyledPhotoWrapper>
          <StyledSelfie src={constructor} alt="Przemek" />
          <StyledName>Przemysław Chojnacki</StyledName>
          <StyledDescription>Wlaściciel firmy</StyledDescription>
          <StyledDescription>502087657</StyledDescription>
          <StyledDescription>ch.przemyslaw@gmail.com</StyledDescription>
        </StyledPhotoWrapper>
        <StyledDescriptionWrapper>
          <StyledDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            asperiores rem exercitationem fugit esse repudiandae iste, iure
            nesciunt mollitia excepturi magnam ipsam, dolore a dicta illum
            quaerat numquam neque eligendi?
          </StyledDescription>
          <StyledDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            asperiores rem exercitationem fugit esse repudiandae iste, iure
            nesciunt mollitia excepturi magnam ipsam, dolore a dicta illum
            quaerat numquam neque eligendi?
          </StyledDescription>
          <StyledDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            asperiores rem exercitationem fugit esse repudiandae iste, iure
            nesciunt mollitia excepturi magnam ipsam, dolore a dicta illum
            quaerat numquam neque eligendi?
          </StyledDescription>
          <StyledDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            asperiores rem exercitationem fugit esse repudiandae iste, iure
            nesciunt mollitia excepturi magnam ipsam, dolore a dicta illum
            quaerat numquam neque eligendi?
          </StyledDescription>
        </StyledDescriptionWrapper>
      </StyledAboutContainer>
    </StyledAbout>
  );
};
