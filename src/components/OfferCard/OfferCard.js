import { OfferInfo } from "./OfferInfo";

import { StyledOfferCard } from "./OfferCardStyle";
import { useState } from "react";

export const OfferCard = ({ icon, photo, photoName, title, description }) => {
  const [activeCard, setActiveCard] = useState(false);

  const handleMouseEnter = (e) => {
    setActiveCard(true);
  };

  const handleMouseLeave = (e) => {
    setActiveCard(false);
  };

  return (
    <StyledOfferCard
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => setActiveCard(!activeCard)}
      activeCard={activeCard}
      photo={photo}
    >
      <OfferInfo
        activeCard={activeCard}
        icon={icon}
        altText={photoName}
        title={title}
        description={description}
      />
    </StyledOfferCard>
  );
};
