import { FC, useState } from "react";
import mockedMenu from "../../../assets/mocks/mockedMenu.json";
import images from "../../../assets/images";
import {
  DropdownArrow,
  MenuElement,
  MenuLink,
  MenuList,
  SubMenu,
  SubMenuItem,
  SubMenuLink,
} from "../../atoms";
import { IMenuElementsProps } from "../../../utils/interfaces";

export const MenuElements: FC<IMenuElementsProps> = ({ isMenuOpen }) => {
  const [dropdown, setDropdown] = useState(false);

  const menu = mockedMenu.map((el, idx) => {
    return (
      <MenuElement
        onClick={() => el.subMenuElements && setDropdown(!dropdown)}
        key={idx}
      >
        <MenuLink>
          {el.title}
          {el.isSubMenu && (
            <DropdownArrow
              src={images.dropdownIcon}
              rotate={dropdown ? "270deg" : "90deg"}
            />
          )}
          {el.subMenuElements && (
            <SubMenu isOpen={dropdown}>
              {el.subMenuElements.map((item, idx) => {
                return (
                  <SubMenuItem
                    key={idx}
                    borderTop={idx === 0 ? "1px solid white" : null}
                  >
                    <SubMenuLink>{item.title}</SubMenuLink>
                  </SubMenuItem>
                );
              })}
            </SubMenu>
          )}
        </MenuLink>
      </MenuElement>
    );
  });
  return <MenuList isOpen={isMenuOpen}>{menu}</MenuList>;
};
