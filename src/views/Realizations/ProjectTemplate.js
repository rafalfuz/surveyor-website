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
import { useLocation } from "react-router-dom";

export const ProjectTemplate = ({ title, description }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
  return (
    <StyledWrapper>
      <StyledBackground />
      <StyledContainer>
        <StyledTitle>
          <StyledPattern bold>{title}</StyledPattern>
        </StyledTitle>
        <StyledInfos>
          <StyledInfo>
            Klient: <StyledPattern bold>Wisła Płock</StyledPattern>
          </StyledInfo>
          <StyledInfo>
            Lokalizacja:{" "}
            <StyledPattern bold>Płock, ulica Łukasiewicza</StyledPattern>
          </StyledInfo>
        </StyledInfos>
        <StyledDescription>
          Opis:{" "}
          <StyledPattern>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            deserunt eum, iure repudiandae eligendi ipsam totam doloribus
            reiciendis adipisci alias, voluptas id illo! Dolore quae repudiandae
            reiciendis magnam, aspernatur officia!
          </StyledPattern>
        </StyledDescription>
        <StyledPhotos>Galeria:</StyledPhotos>
        <ImageGallery items={images} />
        <StyledLink to="/">
          <StyledBackBtn>WRÓĆ</StyledBackBtn>
        </StyledLink>
      </StyledContainer>
    </StyledWrapper>
  );
};
