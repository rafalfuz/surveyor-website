import { StyledHome } from "./HomeStyle";
import { BackgroundOfHome } from "./backgroundOfHome/BackgroundOfHome";
import { FrontOfHome } from "./frontOfHome/FrontOfHome";

export const Home = () => {
  return (
    <StyledHome>
      <BackgroundOfHome />
      <FrontOfHome />
    </StyledHome>
  );
};
