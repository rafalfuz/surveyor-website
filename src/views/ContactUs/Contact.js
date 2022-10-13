import { StyledTitleOfSection } from "../../components/TitleOfSection/TitleOfSectionStyle";
import {
  StyledContact,
  StyledContactInfoContainer,
  StyledLogo,
  StyledMap,
  StyledMaps,
  StyledFrame,
  StyledMapTitle,
  StyledContactInfos,
  StyledInfoItem,
  StyledA,
} from "./ContactStyle";
import { BsFillTelephoneFill } from "react-icons/bs";
import { SiMinutemailer } from "react-icons/si";
import { MdLocationPin } from "react-icons/md";
import { ContactUs } from "./ContactUs";

export const Contact = () => {
  return (
    <StyledContact name="contactSection">
      <StyledTitleOfSection>KONTAKT</StyledTitleOfSection>
      <StyledContactInfoContainer>
        <StyledLogo />
        <StyledContactInfos>
          <StyledInfoItem>
            <BsFillTelephoneFill />
            <StyledA underline href="tel:+48502087657">
              502 087 657
            </StyledA>
          </StyledInfoItem>
          <StyledInfoItem>
            <SiMinutemailer />
            <StyledA underline href="mailto: ch.przemyslaw@gmail.com">
              ch.przemyslaw@gmail.com
            </StyledA>
          </StyledInfoItem>
          <StyledInfoItem>
            <MdLocationPin />
            <StyledA>Górki ul. Orzechowa 2a</StyledA>
          </StyledInfoItem>
          <StyledInfoItem>
            <MdLocationPin />
            <StyledA>Płock ul. Dworcowa 10</StyledA>
          </StyledInfoItem>
        </StyledContactInfos>
        <StyledMaps>
          <StyledMap>
            <StyledMapTitle>Biuro Orzechowa</StyledMapTitle>
            <StyledFrame
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.9841964645884!2d19.716380915909284!3d52.479421846987854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471c76fb5d74ea31%3A0x635386df1cf3225a!2sOrzechowa%202%2C%2009-522%20G%C3%B3rki!5e0!3m2!1spl!2spl!4v1665673463069!5m2!1spl!2spl"
              width="100%"
              height="100%"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></StyledFrame>
          </StyledMap>
          <StyledMap>
            <StyledMapTitle>Biuro Dworcowa</StyledMapTitle>
            <StyledFrame
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2426.195534881711!2d19.705771234408584!3d52.54798787736618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471c709017dae7ed%3A0x9274209229fcad6b!2sDworcowa%2010%2C%2009-402%20P%C5%82ock!5e0!3m2!1spl!2spl!4v1665673520676!5m2!1spl!2spl"
              width="100%"
              height="100%"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></StyledFrame>
          </StyledMap>
        </StyledMaps>
      </StyledContactInfoContainer>
      <ContactUs noBckGrdImg noBackBtn />
    </StyledContact>
  );
};
