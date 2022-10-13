import {
  StyledContactUs,
  StyledWrapper,
  StyledInfoContainer,
  StyledFormContainer,
  StyledInfo,
  StyledPattern,
  StyledA,
} from "./ContactUsStyle";

import { Form } from "../../components/Form/Form";
import { StyledTitleOfSection } from "../../components/TitleOfSection/TitleOfSectionStyle";

export const ContactUs = ({ noBckGrdImg, noBackBtn }) => {
  return (
    <StyledContactUs noBckGrdImg={noBckGrdImg}>
      <StyledWrapper>
        <StyledTitleOfSection
          marginLeft="20px"
          height="60px"
          lineHeight="60px"
          formTitle
        >
          Formularz kontaktowy
        </StyledTitleOfSection>
        <StyledInfoContainer>
          <StyledInfo>
            Godziny otwarcia:{" "}
            <StyledPattern bold color="${({theme})=>theme.black;}">
              Pn-Sb: 9-19
            </StyledPattern>
          </StyledInfo>
          <StyledInfo>
            Numer telefonu:{" "}
            <StyledPattern bold color="${({theme})=>theme.black;}">
              <StyledA href="tel:+48502087657">502 087 657</StyledA>
            </StyledPattern>
          </StyledInfo>
          <StyledInfo>
            Adres e-mail:{" "}
            <StyledPattern bold color="${({theme})=>theme.black;}">
              <StyledA href="mailto: ch.przemyslaw@gmail.com">
                ch.przemyslaw@gmail.com
              </StyledA>
            </StyledPattern>
          </StyledInfo>
        </StyledInfoContainer>
        <StyledFormContainer>
          <Form noBackBtn={noBackBtn} />
        </StyledFormContainer>
      </StyledWrapper>
    </StyledContactUs>
  );
};
