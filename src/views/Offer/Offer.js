import { OfferCard } from "../../components/OfferCard/OfferCard";
import { StyledOffer } from "./OfferStyle";

import blueprint from "../../assets/Photos/blueprint.png";
import blueprint2 from "../../assets/Photos/blueprint2.png";
import engineer from "../../assets/Photos/engineer.png";
import geological from "../../assets/Photos/geological.png";
import geological2 from "../../assets/Photos/geological2.png";
import investment from "../../assets/Photos/investment.png";
import laserLevel from "../../assets/Photos/laser-level.png";

import geodezyjnaObslugaInwestycji from "../../assets/Photos/geodezyjnaObslugaInwestycji.jpg";
import mapyDoCelowProjektowych from "../../assets/Photos/mapyDoCelowProjektowych.jpg";
import podzialyRozgraniczenia from "../../assets/Photos/podzialyRozgraniczenia.jpg";
import tyczenieObjektow from "../../assets/Photos/tyczenieObjektow.jpg";
import { StyledSectionTitle } from "../../components/TitleOfSection/TitleOfSection";

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id faucibus nunc, in placerat nisi. Nulla a ex aliquet, scelerisque ipsum sit amet, viverra odio. Sed lacus dui, pellentesque non posuere sit amet, dignissim eu purus. In ac sagittis lorem.";

export const Offer = () => {
  return (
    <StyledOffer>
      <StyledSectionTitle>OFERTA</StyledSectionTitle>
      <OfferCard
        photo={mapyDoCelowProjektowych}
        altText="Mapy Do Celow Projektowych"
        icon={blueprint}
        title="Mapy do celów projektowych"
        description={lorem}
      />
      <OfferCard
        photo={tyczenieObjektow}
        aleText="Tyczenie Obiektów I Inwentaryzacje Powykonawcze"
        icon={geological2}
        title="Tyczenie obiektów i inwentaryzacje powykonawcze"
        description={lorem}
      />
      <OfferCard
        photo={podzialyRozgraniczenia}
        altText="Podziały, rozgraniczenia, wznowienie znaków granicznych"
        icon={blueprint2}
        title="Podziały, rozgraniczenia, wznowienie znaków granicznych"
        description={lorem}
      />
      <OfferCard
        photo={geodezyjnaObslugaInwestycji}
        altText="Geodezyjna Obsluga Inwestycji"
        icon={investment}
        title="Geodezyjna Obsługa Inwestycji"
        description={lorem}
      />
    </StyledOffer>
  );
};
