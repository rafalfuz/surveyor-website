import { Link } from "react-router-dom";
import { StyledRealizations } from "./RealizationsStyle";
import { AlbumCard } from "../../components/AlbumCard/AlbumCard";
import { StyledSectionTitle } from "../../components/TitleOfSection/TitleOfSection";
import { realizationsDatas } from "./realizationsDatas";

export const Realizations = () => {
  return (
    <StyledRealizations>
      <StyledSectionTitle>Reazlizacje</StyledSectionTitle>
      {realizationsDatas.map(item => 
      <Link to={item.path} key={item.id}>
        <AlbumCard 
        title={item.title} 
        albumCardPhoto={item.albumCardPhoto}/>

      </Link>)}
    </StyledRealizations>
  );
};
