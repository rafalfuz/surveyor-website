import styled from "styled-components";

export const StyledOfferCard = styled.div`
  width: 800px;
  height: 480px;
  background-image: ${({ photo }) => `url(${photo})`};
  background-position: center;
  background-size: cover;
  position: relative;
  overflow: hidden;
  margin: 25px 45px;
  border: 4px solid black;
  @media screen and (max-width: 960px) {
    width: 360px;
    height: 215px;
    margin: 20px 0;
    border: 3px solid black;
  }
`;