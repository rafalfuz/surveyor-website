import {
  StyledWrapper,
  StyledBackground,
  StyledContainer,
  StyledTitle,
  StyledInfos,
  StyledInfo,
  StyledDescription,
  StyledPhotos,
  StyledPattern,
  StyledBackBtn,
  StyledLink,
} from "./ProjectTemplateStyle";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import { useEffect } from "react";
import { useLocation, useNavigate} from "react-router-dom";



export const ProjectTemplate = ({ title, description, client, localization, imagesArray, projectViewBackgroundPhoto }) => {
  const navigate = useNavigate()
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  return (
    <StyledWrapper>
      <StyledBackground projectViewBackgroundPhoto={projectViewBackgroundPhoto}/>
      <StyledContainer>
        <StyledTitle>
          <StyledPattern bold>{title}</StyledPattern>
        </StyledTitle>
        <StyledInfos>
          <StyledInfo>
            Klient: <StyledPattern bold paddingRight>{client}</StyledPattern>
          </StyledInfo>
          <StyledInfo>
            Lokalizacja:{" "}
            <StyledPattern bold>{localization}</StyledPattern>
          </StyledInfo>
        </StyledInfos>
        <StyledDescription>
          Opis:{" "}
          <StyledPattern>
            {description}
          </StyledPattern>
        </StyledDescription>
        <StyledPhotos>Galeria:</StyledPhotos>
        <ImageGallery items={imagesArray} />
        <StyledLink to="/">
          <StyledBackBtn onClick={()=>navigate(-1)}>WRÓĆ</StyledBackBtn>
        </StyledLink>
      </StyledContainer>
    </StyledWrapper>
  );
};
