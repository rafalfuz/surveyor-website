import { Routes, Link } from "react-router-dom";
import { StyledRealizations } from "./RealizationsStyle";
import { AlbumCard } from "../../components/AlbumCard/AlbumCard";
import { StyledSectionTitle } from "../../components/TitleOfSection/TitleOfSection";

export const Realizations = () => {
  return (
    <StyledRealizations>
      <StyledSectionTitle>Reazlizacje</StyledSectionTitle>
      <Link to="/stadium">
        <AlbumCard />
      </Link>
      <AlbumCard />
      <AlbumCard />
      <AlbumCard />
      <AlbumCard />
    </StyledRealizations>
  );
};
