import styled from "styled-components";
import { IPropsStyle } from "../../../utils/interfaces";

export const SocialMediaWebpartWrapper = styled.div<IPropsStyle>`
  display: flex;
  justify-content: space-between;
  padding: 40px 16px;
  flex-direction: column;

  @media (min-width: 1280px) {
    width: ${(props) => props.width || "42%"};
  }
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 28%;
  border-bottom: 3px solid lightgray;
  padding: 16px 0;

  @media (min-width: 786px) and (max-width: 1279px) {
    justify-content: space-evenly;
  }
`;

export const SocialMediaImageWrapper = styled.div`
  position: relative;
  @media (max-width: 785px) {
    width: 44%;
    height: 130px;
  }
  @media (min-width: 786px) and (max-width: 1279px) {
    width: 25%;
    height: 130px;
  }
  @media (min-width: 1280px) {
    width: 40%;
    height: 100%;
  }
`;

export const SocialMediaLogo = styled.img`
  height: 26px;
  width: 26px;
  position: absolute;
  bottom: 4%;
  right: 4%;
`;

export const SocialMediaText = styled.p<IPropsStyle>`
  color: #31528f;
  font-size: 0.85rem;
  color: black;
  font-family: ${(props) => props.fontFamily};
  line-height: 18px;
  overflow: hidden;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  display: -webkit-box;
`;

export const SocialMediaContent = styled.div`
  width: 56%;
  padding: 0 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
