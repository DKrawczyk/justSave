import styled from "styled-components";
import { IPropsStyle } from "../../../utils/interfaces";

export const Hyperlink = styled.a`
  font-size: 0.75rem;
  color: #31528f;
  font-weight: bold;
`;

export const ArticleHeader = styled.h3`
  font-size: 1.6rem;
  font-weight: bold;
  color: #31528f;
`;

export const ListWrapper = styled.div`
  padding: 16px 0;
  display: flex;
  flex-direction: column;
`;

export const FooterPaginationWrapper = styled.footer`
  height: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ShortText = styled.p<IPropsStyle>`
  color: #31528f;
  font-size: ${(props) => props.fontSize || ""};
  white-space: ${(props) => props.whiteSpace || ""};
  font-family: ${(props) => props.fontFamily || ""};
`;

export const ShortHeader = styled.h4<IPropsStyle>`
  font-weight: bold;
  font-size: ${(props) => props.fontSize || ""};
  color: ${(props) => props.color || "#31528f"};
  font-family: ${(props) => props.fontFamily || "SnTb, sans-serif"};
  white-space: ${(props) => props.whiteSpace || ""};
`;

export const CustomButtonWrapper = styled.a<IPropsStyle>`
  display: inline-block;
  width: ${(props) => props.width || "180px"};
`;

export const Button = styled.button<IPropsStyle>`
  background-color: #3ab8b7;
  border: none;
  color: white;
  padding: ${(props) => props.padding || "18px"};
  width: 100%;
  font-size: ${(props) => props.fontSize || "0.9rem"};
`;

export const ImageBackground = styled.div<IPropsStyle>`
  background-image: ${(props) => `url(${props.image})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
`;
