import styled from "styled-components";
import { IPropsStyle } from "../../../utils/interfaces";

export const ImportantInfoWrapper = styled.div`
  background-color: #3ab8b7;
  color: white;
  padding: 10px;
  text-align: center;
`;

export const ImportantInformation = styled.span`
  background-color: #3ab8b7;
`;

export const ReadLink = styled.a`
  color: white;
  &:visited {
    color: white;
  }
`;

export const NewsWrapper = styled.div`
  @media (min-width: 1280px) {
    padding: 30px 100px;
  }
`;

export const NewsLayoutWrapper = styled.div`
  margin: 0 auto;
  max-width: 1960px;
`;

export const NewsContent = styled.p`
  line-height: 20px;
  word-spacing: 1px;
`;

export const DataNewsStyling = styled.h5`
  color: #80a7c1;
  font-size: 0.9rem;
  margin-top: 16px;
`;

export const MainNewsDescription = styled.section`
  position: absolute;
  min-height: 235px;
  background: #31528f;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 24px;
  color: white;
  @media (max-width: 785px) {
    min-height: inherit;
    bottom: 0;
  }
  @media (min-width: 786px) and (max-width: 1279px) {
    right: 0%;
    width: 56%;
    bottom: 0;
  }
  @media (min-width: 1280px) {
    right: 15%;
    width: 42%;
    top: calc(50% - 235px / 2);
  }
`;

export const MainNewsDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.h1`
  @media (min-width: 786px) {
    font-size: 1.75rem;
  }
  @media (min-width: 1280px) {
    font-size: 2rem;
  }
  margin-bottom: 16px;
  font-weight: bold;
`;

export const MainNewsFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MainNewsFooterRef = styled.a`
  border: none;
  background: none;
  font-size: 1rem;
  color: white;
  cursor: pointer;
`;

export const MainNewsImgWrapper = styled.div`
  height: 450px;

  @media (min-width: 1280px) {
    width: 56%;
  }
`;

export const MainNewsImage = styled.div<IPropsStyle>`
  background-image: ${(props) => `url(${props.image})`};
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  @media (min-width: 786px) and (max-width: 1279px) {
    background-size: cover;
  }
  @media (min-width: 1280px) {
    background-size: cover;
  }
`;

export const MainNewsWrapper = styled.div`
  position: relative;
  max-height: 450px;
`;

export const NewsTag = styled.div<IPropsStyle>`
  left: ${(props) => props.left || "initial"};
  right: ${(props) => props.right || "initial"};
  text-transform: uppercase;
  position: absolute;
  top: ${(props) => props.top || "4%"};
  padding: 4px 14px;
  background-color: #3ab8b7;
  color: white;
  text-align: center;
  @media (min-width: 786px) and (max-width: 1279px) {
    left: ${(props) => props.left || "initial"};
    right: ${(props) => props.right || "initial"};
  }
`;

export const NewsListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  @media (max-width: 785px) {
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 786px) and (max-width: 1279px) {
    width: 100%;
    flex-direction: column;
    padding: 40px 0;
  }
`;

export const NewsTileWrapper = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 22px;
  justify-content: space-between;
  @media (max-width: 785px) {
    flex-direction: column;
    width: 90%;
  }
  @media (min-width: 786px) and (max-width: 1279px) {
    justify-content: space-around;
  }
  @media (min-width: 1280px) {
    width: 31%;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const TileImage = styled.div<IPropsStyle>`
  background-image: ${(props) => `url(${props.image})`};
  height: 240px;
  width: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  @media (min-width: 786px) and (max-width: 1279px) {
    width: 36%;
    height: 220px;
  }
`;

export const ArticleHeader = styled.h3`
  font-size: 1.6rem;
  font-weight: bold;
  color: #31528f;
`;

export const NewsTileDesriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 160px;
  justify-content: space-between;
  margin-top: 10px;
  @media (max-width: 785px) {
    height: inherit;
  }

  @media (min-width: 786px) and (max-width: 1279px) {
    width: 50%;
    height: inherit;
    justify-content: space-evenly;
  }
`;
