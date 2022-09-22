import { useState, useEffect } from "react";
import {
  StyledWelcomeSection,
  StyledAnimatedWrapper,
} from "./welcomeSectionStyle";
import { useTransition, animated, config } from "react-spring";
import "./styles.css";

import img1 from "../../assets/Photos/surveyorWorksDesc.jpg";
import img2 from "../../assets/Photos/surveyorWorksDesc.jpg";
import img3 from "../../assets/Photos/surveyorWorksDesc.jpg";

const slides = [
  {
    id: 0,
    url: img2,
  },
  {
    id: 1,
    url: img3,
  },
  {
    id: 2,
    url: "reserve/bnW1TuTV2YGcoh1HyWNQ_IMG_0207.JPG?ixlib=rb-1.2.1&w=1534&q=80",
  },
];

export const WelcomeSection = () => {
  const [index, set] = useState(0);
  const transitions = useTransition(slides[index], (item) => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  });
  useEffect(() => {
    setInterval(() => set((state) => (state + 1) % 4), 10000);
  }, []);
  return (
    <StyledWelcomeSection>
      <StyledAnimatedWrapper>
        {transitions.map(({ item, props, key }) => (
          <animated.div
            key={key}
            className="bg"
            style={{
              ...props,
              backgroundImage: `url(${img1})`,
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              backgroundSize: "cover",
              backgroundPosition: "center",
              willChange: "opacity",
              overflow: "hidden",
              zIndex: "-999",
            }}
          />
        ))}
      </StyledAnimatedWrapper>
    </StyledWelcomeSection>
  );
};
