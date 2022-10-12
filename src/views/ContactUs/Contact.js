import { StyledTitleOfSection } from "../../components/TitleOfSection/TitleOfSectionStyle";
import { StyledContact, StyledContactInfoContainer } from "./ContactStyle";
import { ContactUs } from "./ContactUs";

export const Contact = () => {
  return (
    <StyledContact>
      <StyledTitleOfSection>KONTAKT</StyledTitleOfSection>
      <StyledContactInfoContainer></StyledContactInfoContainer>
      <ContactUs noBckGrdImg noBackBtn />
    </StyledContact>
  );
};
