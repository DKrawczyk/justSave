import React, { FC, useState } from "react";
import { Navigation, NavigationWrapper } from "../../atoms";
import { Hamburger, MenuElements } from "../../molecules";

export const Menu: FC = () => {
  const [openMenu, setOpenMenu] = useState(true);

  return (
    <NavigationWrapper>
      <Navigation>
        <Hamburger callback={() => setOpenMenu(!openMenu)} />
        <MenuElements isMenuOpen={openMenu} />
      </Navigation>
    </NavigationWrapper>
  );
};
