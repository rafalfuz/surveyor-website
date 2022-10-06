
import { StyledRealizations, StyledContainer, StyledLink } from "./RealizationsStyle";
import { AlbumCard } from "../../components/AlbumCard/AlbumCard";
import { StyledSectionTitle } from "../../components/TitleOfSection/TitleOfSection";
import { realizationsDatas } from "./realizationsDatas";

export const Realizations = () => {
  return (
    <StyledRealizations>
      <StyledSectionTitle>Reazlizacje</StyledSectionTitle>
      <StyledContainer>
      {realizationsDatas.map(item => 
      <StyledLink to={item.path} key={item.id}>
        <AlbumCard 
        title={item.title}
        albumCardPhoto={item.albumCardPhoto}/>
      </StyledLink>)}
      </StyledContainer>
      
    </StyledRealizations>
  );
};
