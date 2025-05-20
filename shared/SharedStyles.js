import styled from "styled-components/native";
import { theme } from "../constants/colors";
import { breakpoints } from "../constants/breakpoints";
export const HeaderText = styled.Text`
  font-size: 18px;
  font-weight: 400;
  color: ${theme.black};
`;

export const HeaderTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${theme.black};
`;
export const HeaderContentWrapper = styled.View`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 5px 20px;
`;
export const CardsCarouselWrapper = styled.View`
  display: block;
  width: 950px;
  top: 330px;
  place-items: center;
  align-self: center;
  @media (max-width: ${breakpoints.md}) {
    width: 400px;
  }
`;
export const ShowMore = styled.View`
  display: flex;
  color: ${theme.black};
  padding: 20px;
  background-color: unset;
  text-decoration: underline;
  border: none;
  cursor: pointer;
`;
export const ShowMoreCardsWrapper = styled.View`
  display: grid;

  grid-template-columns: repeat(1, minmax(0, 1fr));

  @media (min-width: 62em) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 96em) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (min-width: 128em) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  gap: 10px;
  place-content: center;
  place-items: center;
  overflow: hidden;
  transition: max-height 0.3s ease;
  @media (max-width: ${breakpoints.md}) {
    width: 100%;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    place-content: center;
    place-items: center;
  }
`;
