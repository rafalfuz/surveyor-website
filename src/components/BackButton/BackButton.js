import { useEffect } from "react";
import { useRouter } from "react-router-dom";
import { StyledBackBtn } from "./BackButtonStyle";

export const BackButton = (children) => {
  return <StyledBackBtn to="/">{children}</StyledBackBtn>;
};
