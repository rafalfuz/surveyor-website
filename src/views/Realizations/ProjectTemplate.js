import {
  StyledWrapper,
  StyledBackground,
  StyledContainer,
  StyledTitle,
  StyledInfos,
  StyledDescription,
  StyledPhotos,
} from "./ProjectTemplateStyle";

export const ProjectTemplate = ({ title, description }) => {
  return (
    <StyledWrapper>
      <StyledBackground />
      <StyledContainer>
        <StyledTitle></StyledTitle>
        <StyledInfos></StyledInfos>
        <StyledDescription />
        <StyledPhotos />
      </StyledContainer>
    </StyledWrapper>
  );
};
