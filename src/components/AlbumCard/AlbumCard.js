import { useState } from "react";
import {
  StyledAlbumCard,
  StyledAlbumTitle,
  StyledBackgroundPhoto,
} from "./AlbumCardStyle";

export const AlbumCard = () => {
  const [activeAlbumCard, setActiveAlbumCard] = useState(false);

  const handleMouseEnter = (e) => {
    setActiveAlbumCard(true);
  };

  const handleMouseLeave = (e) => {
    setActiveAlbumCard(false);
  };

  return (
    <StyledAlbumCard
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <StyledAlbumTitle albumCardHover={activeAlbumCard}>
        Stadion piłkarski przy ulicy Łukasiewicza
      </StyledAlbumTitle>
      <StyledBackgroundPhoto albumCardHover={activeAlbumCard} />
    </StyledAlbumCard>
  );
};
