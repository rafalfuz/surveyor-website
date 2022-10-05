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

export const ProjectTemplate = ({ title, description, client, localization, imagesArray }) => {
  const navigate = useNavigate()
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const images = imagesArray
  {/*  Array Template 
        const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];

*/}

  return (
    <StyledWrapper>
      <StyledBackground />
      <StyledContainer>
        <StyledTitle>
          <StyledPattern bold>{title}</StyledPattern>
        </StyledTitle>
        <StyledInfos>
          <StyledInfo>
            Klient: <StyledPattern bold>{client}</StyledPattern>
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
        <ImageGallery items={images} />
        <StyledLink to="/">
          <StyledBackBtn onClick={()=>navigate(-1)}>WRÓĆ</StyledBackBtn>
        </StyledLink>
      </StyledContainer>
    </StyledWrapper>
  );
};
