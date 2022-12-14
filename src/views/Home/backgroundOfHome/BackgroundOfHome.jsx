import {
  StyledBackground,
  StyledBackgroundWrapper,
} from "./BackgroundOfHomeStyle";

import BackgroundSlider from "react-background-slider";

import img1Desktop from "../../../assets/Photos/surveyorWorksDesc.jpg";
import img2Desktop from "../../../assets/Photos/workingSurveyorsDesktop.jpg";
import img3Desktop from "../../../assets/Photos/theodoliteFieldDesktop.jpg";
import img1Mobile from "../../../assets/Photos/surveyorWorksMobile.jpg";
import img2Mobile from "../../../assets/Photos/workingSurveyorsMobile.jpg";
import img3Mobile from "../../../assets/Photos/theodoliteFieldMobile.jpg";
import { useWindowDimensions } from "../../../HOOKS/useWindowDimensions";

export const BackgroundOfHome = () => {
  const { width } = useWindowDimensions();

  return (
    <StyledBackground>
      <StyledBackgroundWrapper>
        {width < 960 ? (
          <BackgroundSlider
            images={[img2Mobile, img3Mobile, img1Mobile]}
            duration={10}
            transition={3}
            style={{ border: "10px" }}
          ></BackgroundSlider>
        ) : (
          <BackgroundSlider
            images={[img2Desktop, img3Desktop, img1Desktop]}
            duration={10}
            transition={2}
            style={{ border: "10px solid black" }}
          ></BackgroundSlider>
        )}
      </StyledBackgroundWrapper>
    </StyledBackground>
  );
};
