import styled from "styled-components";
import { IPropsStyle } from "../../../utils/interfaces";

export const InterestingEventWrapper = styled.div<IPropsStyle>`
  display: flex;
  justify-content: space-between;
  padding: 40px 16px;
  flex-direction: column;
  @media (max-width: 785px) {
    height: 700px;
  }
  @media (min-width: 786px) and (max-width: 1279px) {
    height: 600px;
  }

  @media (min-width: 1280px) {
    width: ${(props) => props.width || "30%"};
    min-height: 700px;
  }
`;

export const InterestingEventContent = styled.p`
  font-size: 2rem;
  color: white;
  font-weight: bold;
  line-height: 38px;
  overflow: hidden;
  -webkit-line-clamp: 10;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  @media (min-width: 786px) and (max-width: 1279px) {
    -webkit-line-clamp: 7;
  }
`;

export const InterestingNewsWrapper = styled.div`
  height: 100%;
  padding: 24px 0;
  position: relative;
  @media (min-width: 786px) and (max-width: 1279px) {
    width: 100%;
  }
`;

export const EventDetailsWrapper = styled.div`
  position: absolute;
  top: calc(0px + 24px);
  width: 40%;
  padding: 30px 0px 30px 30px;
  height: calc(100% - 48px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 785px) {
    width: 90%;
  }
`;
