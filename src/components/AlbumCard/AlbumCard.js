import { useState } from "react";
import {
  StyledAlbumCard,
  StyledAlbumTitle,
  StyledBackgroundPhoto,
} from "./AlbumCardStyle";

export const AlbumCard = ({title, albumCardPhoto}) => {
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
        {title}
      </StyledAlbumTitle>
      <StyledBackgroundPhoto albumCardHover={activeAlbumCard} albumCardPhoto={albumCardPhoto}/>
    </StyledAlbumCard>
  );
};
