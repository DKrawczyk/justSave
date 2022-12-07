import { FC } from "react";
import { IHamburgerProps } from "../../../utils/interfaces";
import { HamburgerElement, HamburgerWrapper } from "../../atoms";

export const Hamburger: FC<IHamburgerProps> = ({ callback }) => {
  return (
    <HamburgerWrapper onClick={callback}>
      <HamburgerElement top={"35%"} />
      <HamburgerElement top={"48%"} />
      <HamburgerElement top={"62%"} />
    </HamburgerWrapper>
  );
};
