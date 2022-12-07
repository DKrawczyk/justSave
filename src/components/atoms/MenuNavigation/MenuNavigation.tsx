import styled from "styled-components";
import { ISubMenuProps } from "../../../utils/interfaces";

export const NavigationWrapper = styled.div`
  background-color: #31528f;
  @media (min-width: 786px) and (max-width: 1279px) {
    display: flex;
  }
  @media (min-width: 1280px) {
    padding: 0 100px;
  }
`;

export const Navigation = styled.nav`
  margin: 0 auto;
  max-width: 1960px;
  height: 55px;
  position: relative;
`;

export const HamburgerWrapper = styled.div<ISubMenuProps>`
  display: block;
  width: 40px;
  position: absolute;
  height: 100%;
  left: 20px;
  cursor: pointer;
  @media (min-width: 785px) {
    display: none;
  }
`;

export const HamburgerElement = styled.span<ISubMenuProps>`
  border-bottom: 2px solid white;
  width: 100%;
  position: absolute;
  top: ${(props) => props.top || "0px"};
`;

export const MenuList = styled.ul<ISubMenuProps>`
  display: flex;
  align-items: flex-start;
  color: white;
  @media (max-width: 785px) {
    position: absolute;
    top: 100%;
    width: 75%;
    background-color: #31528f;
    flex-direction: column;
    z-index: 99;
    justify-content: center;
    display: ${(props) => (props.isOpen ? "none" : "flex")};
    opacity: 0.9;
  }
`;

export const MenuElement = styled.li`
  cursor: pointer;
  &:hover {
    font-weight: bold;
    border-bottom: 2px solid white;
    margin-bottom: -2px;
  }
  @media (max-width: 785px) {
    border-bottom: 1px solid white;
    margin-bottom: -1px;
    width: 100%;
    text-align: center;
    position: relative;
  }
`;

export const MenuLink = styled.a`
  color: white;
  text-decoration: none;
  display: inline-block;
  padding: 18px 0;
  margin: 0 20px;
  @media (min-width: 785px) {
    position: relative;
  }
`;

export const SubMenu = styled.ul<ISubMenuProps>`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: absolute;
  background: #31528f;
  width: 180px;
  top: 100%;
  z-index: 99;
  left: -40px;
  @media (max-width: 785px) {
    left: 0;
    width: 60%;
  }
`;

export const SubMenuItem = styled.li<ISubMenuProps>`
  padding: 20px 12px;
  cursor: pointer;
  @media (max-width: 785px) {
    padding: 12px;
    border-top: ${(props) => props.borderTop || "none"};
    border-bottom: 1px solid white;
  }
  &:hover {
    font-weight: bold;
  }
`;

export const DropdownArrow = styled.img<ISubMenuProps>`
  margin-left: 12px;
  width: 10px;
  height: 10px;
  rotate: ${(props) => props.rotate || "0deg"};
`;

export const SubMenuLink = styled.a``;
